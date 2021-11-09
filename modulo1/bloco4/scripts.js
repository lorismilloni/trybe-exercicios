/* const myName = "Loris";
const birthCity = "Palmas";
let birthYear = 1995;
let age = 26;
birthYear = 2030;

console.log(myName);
console.log(birthCity);
console.log(birthYear);
console.log(age);

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
    firstName: 'Ana',
    lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientInfo);

const base = 5;
let height = 8;
const area = base * height;
console.log(area);
const perimeter = base * 2 + height * 2;
console.log(perimeter);

let trybe = 14;

if (trybe >= 14 && trybe < 14.40) {
    console.log("Esquenta");
} else if (trybe >= 16.30 && trybe <17.50) {
    console.log("Aula ao vivo");
} else if ( trybe >= 19.40 && trybe < 20) {
    console.log("Fechamento");
} else {
    console.log("Fora dos momentos síncronos")
}

const inteligenciaDoR = 1;

if (inteligenciaDoR > 50) {
    console.log("Capaz de pensar e refletir")
} else if (inteligenciaDoR > 20) {
    console.log("Com dificuldades consegue participar do mundo");
} else {
    console.log("Coitado! Deve procurar ajuda para ter acompanhamento profissional.")
}

//&& só é true quando as duas condições são verdadeiras

const currentHour = 19;
let message = "";

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir"
} else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D"
} else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?"
} else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço!!!"
} else {
    message = "Hmm, cheiro de café recém passado"
}

console.log(message)

let weekDay = "quarta-feira";

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
} else {
    console.log("FINALMENTE, descanso merecido UwU")
}

let pizzas = ['4 queijos', 'Frango com catupiry', 'Palmito'];

for (let index = 0; index < pizzas.length; index += 1) {
	console.log(pizzas[index]);
}

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
  }

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let nomes of names) {
    console.log(nomes);
} */

// exercícios

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;
let menor = numbers[0];

/* for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
} */

/* for (let i = 0; i < numbers.length; i += 1) {
    soma += numbers[i];
}

console.log(soma); */

/* for (let i = 0; i < numbers.length; i += 1) {
    soma += numbers[i];
    media = soma / numbers.length;
}
if (media > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
} */

/* for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < menor) {
        menor = numbers[i];
    }
}
console.log(menor); */

/* for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > menor) {
        menor = numbers[i];
    }
}
console.log(menor); */

/* let impar = [];

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 != 0) {
        impar.push(numbers[i]);
    } else {
        console.log('nenhum valor ímpar encontrado')
    }
}

console.log(impar) */

array = [];

for (let i = 1; i <= 25; i += 1) {
    array.push(i);
}

console.log(array);

let division = [];

for (let i = 0; i < array.length; i += 1) {
    division.push(array[i] / 2);
    console.log(division);
}




