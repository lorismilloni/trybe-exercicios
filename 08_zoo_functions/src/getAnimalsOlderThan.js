const data = require('../data/zoo_data');

const animais = data.species;

function getAnimalsOlderThan(animal, age) {
  const procurarAnimal = animais.find((resultado) => resultado.name === animal);
  const idadeMinima = procurarAnimal.residents.every((result) => result.age >= age);
  return idadeMinima;
}

// console.log(getAnimalsOlderThan('tigers', 3));

module.exports = getAnimalsOlderThan;
