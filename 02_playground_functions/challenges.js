// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// referência: https://www.freecodecamp.org/news/javascript-split-how-to-split-a-string-into-an-array-in-js/

// Desafio 4
function concatName(array) {
  return `${[].concat(array[array.length - 1])}, ${[].concat(array[0])}`;
}

// referência: https://www.freecodecamp.org/news/javascript-array-insert-how-to-add-to-an-array-with-the-push-unshift-and-concat-functions/

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(numbers) {
  let maior = numbers[0];
  let contador = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maior) {
      maior = numbers[index];
    }
  }
  for (let i = 0; i < numbers.length; i += 1) {
    if (maior === numbers[i]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaGato1 = Math.abs(cat1 - mouse); // 0 - 1 = -1
  let distanciaGato2 = Math.abs(cat2 - mouse); // 2 - 0 = 2
  if (distanciaGato2 > distanciaGato1) {
    return 'cat1';
  } if (distanciaGato1 > distanciaGato2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numeros) {
  let retorno = [];
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] % 3 === 0) {
      if (numeros[index] % 5 === 0) {
        retorno.push('fizzBuzz');
      } else {
        retorno.push('fizz');
      }
    } else if (numeros[index] % 5 === 0) {
      retorno.push('buzz');
    } else {
      retorno.push('bug!');
    }
  }
  return retorno;
}

// Desafio 9
function encode(vogais) {
  let numeros = [];
  for (let index = 0; index < vogais.length; index += 1) {
    if (vogais[index] === 'a') {
      numeros.push('1');
    } else if (vogais[index] === 'e') {
      numeros.push('2');
    } else if (vogais[index] === 'i') {
      numeros.push('3');
    } else if (vogais[index] === 'o') {
      numeros.push('4');
    } else if (vogais[index] === 'u') {
      numeros.push('5');
    } else {
      numeros.push(vogais[index]);
    }
  }
  return numeros.join('');
}

function decode(consoantes) {
  let numeros = [];
  for (let index = 0; index < consoantes.length; index += 1) {
    if (consoantes[index] === '1') {
      numeros.push('a');
    } else if (consoantes[index] === '2') {
      numeros.push('e');
    } else if (consoantes[index] === '3') {
      numeros.push('i');
    } else if (consoantes[index] === '4') {
      numeros.push('o');
    } else if (consoantes[index] === '5') {
      numeros.push('u');
    } else {
      numeros.push(consoantes[index]);
    }
  }
  return numeros.join('');
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
