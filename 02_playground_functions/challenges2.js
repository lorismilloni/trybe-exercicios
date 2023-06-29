/* eslint-disable complexity */
// Desafio 10
function techList(habilitiesToLearn, name) {
  habilitiesToLearn.sort();
  let techs = {};
  let arrayVazio = [];

  for (let index = 0; index < habilitiesToLearn.length; index += 1) {
    techs.tech = habilitiesToLearn[index];
    techs.name = name;
    arrayVazio[index] = techs; // usa o for para dar a posição e adiciona o objeto/propriedade criada antes
    techs = {}; // zera o objeto, mas gravou a info no array
  }
  if (habilitiesToLearn.length === 0) {
    return 'Vazio!';
  }
  return arrayVazio;
}

// Desafio 11
function triangleCheck(lineA, lineB, lineC) {
  let somaAB = Math.abs(lineA + lineB);
  let somaBC = Math.abs(lineB + lineC);
  let somaCA = Math.abs(lineC + lineA);
  let menosAB = Math.abs(lineA - lineB);
  let menosBC = Math.abs(lineB - lineC);
  let menosCA = Math.abs(lineC - lineA);
  if (lineA > somaBC || lineB > (somaCA) || lineC > somaBC) {
    return false;
  } else if (lineA < somaBC || lineB < somaCA || lineC < somaAB) {
    if (lineA < somaBC && lineA > menosBC) {
      return true;
    } else if (lineB < somaCA && lineB > menosCA) {
      return true;
    } else if (lineC < somaBC && lineC > menosAB) {
      return true;
    } else {
    return false;
    }
  } 
}

module.exports = {
  techList,
  triangleCheck,
};
