const myName = "Loris";
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