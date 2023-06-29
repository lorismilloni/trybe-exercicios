const { species, employees } = require('../data/zoo_data');

function funcionarios() {
  const infos = employees.map(({ id, firstName, lastName, responsibleFor }) => {
    const objFuncionario = {
      id,
      fullName: `${firstName} ${lastName}`,
    };
    objFuncionario.species = responsibleFor
      .map((idAnimal) => species
        .find((especie) => especie.id === idAnimal).name);
    objFuncionario.locations = responsibleFor
      .map((idAnimal) => species
        .find((especie) => especie.id === idAnimal).location);
    // console.log(responsibleFor);
    // console.log(objFuncionario, 'aqui');
    return objFuncionario;
  });
  return infos;
}

function existeFuncionario({ name, id }) {
  return employees.some((f) => name === f.firstName || name === f.lastName || id === f.id);
}

function getEmployeesCoverage(objetoRecebido) {
  if (objetoRecebido === undefined) {
    // console.log('entrou no if');
    return funcionarios();
  } if (existeFuncionario(objetoRecebido) === false) {
    throw new Error('Informações inválidas');
  } if (objetoRecebido.id) {
    const achaPorId = funcionarios().find((fulano) => fulano.id === objetoRecebido.id);
    // console.log('será?');
    return achaPorId;
  } if (objetoRecebido.name) {
    const achaPorName = funcionarios()
      .find((fulano) => fulano.fullName.includes(objetoRecebido.name));
    return achaPorName;
  }
  // return existeFuncionario(objetoRecebido);
}

// console.log(existeFuncionario({ id: 'Id inválido' }));
// console.log(getEmployeesCoverage({ id: 'Id inválido' }));

module.exports = getEmployeesCoverage;
