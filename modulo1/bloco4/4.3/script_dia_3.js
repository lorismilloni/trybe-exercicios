/* /* let singer = {
	name: 'Milton',
	lastName: 'Nascimento',
	nickname: 'Bituca',
	age: 77,
	bestAlbuns: ['Travessia', 'Clube da Esquina', 'Minas'],
    bornInfo: {
        city: 'Rio de Janeiro',
        state: 'Rio de Janeiro',    
	}
}; 

console.log('O cantor ' + singer.name + ' ' + singer.lastName + ' possui ' + singer.age + ' anos.');

console.log('O cantor ' + singer['name'] + ' ' + singer['lastName'] + ' possui ' + singer['age'] + ' anos.');

singer['fullName'] = singer.name + ' ' + singer.lastName;

console.table(singer);

console.log('O cantor ' + singer.fullName + ' nasceu no estado do ' + singer.bornInfo.state); */

/* let pizzas = {
	flavor: "Palmito",
	pryce: 39.90,
	borderCheese: true,
};

for (let key in pizzas) {
    console.log(pizzas[key]);
}

let pizzasDoces = ['chocolate', 'banana', 'morango'];

for (let key in pizzasDoces) {
    console.log(key, pizzasDoces[key]);
} */

/* var statusCarro = "desligado";
var aceleracao = 0;
var rotacaoDoVolante = 0;

function ligarDesligar() {
    if (statusCarro === "desligado") {
        statusCarro = "ligado;"
    } else {
        statusCarro = "desligado";
    }

    return statusCarro;
}

function acelerar(incremento) {
    aceleracao = aceleracao + incremento;

    return "Acelerando a " + aceleracao + "m/s²";
}

function frear(decremento) {
    aceleracao = aceleracao - decremento;

    return "Desacelerando para " + aceleracao + "m/s²";
}

function girarVolante(anguloRotacao) {
    rotacaoDoVolante = anguloRotacao;

    return rotacaoDoVolante + "º";
} */

/* let qtd = 10;
let ingredientes = ['queijo', 'presunto', 'maionese', 'pepino', 'tomate seco'];
let sacola = [];

for(let index = 0; index < 10; index += 1) {
    //console.log('executou fora: ', index)
    
    let pao = [];
    
    for(let index = 0; index < ingredientes.length; index += 1) {
        //console.log('executou dentro: ', index) //aqui usar o let cria um novo escopo para a varíavel index ter o mesmo nome e ser usada dentro desse for
        pao.push(ingredientes[index])
    }
    
    sacola.push("pao")
}

console.log("sacola: ", sacola[4])

let xTrybe = ['pão', 'queijo', 'bacon', 'alface', 'ketchup', 'pão']; */

// EXEMPLO FOR DENTRO DE FOR

let ingredientes = ['queijo', 'maionese', 'alface', 'tomate', 'salame', 'rosbife'];
let ingredientesVeg = [];
let sanduiceVegetariano = false;
let pao = 'pão';
let sanduiche = [];

for(let index = 0; index < 2; index+=1) {

    if(sanduiceVegetariano == true) {
        for(let index = 0; index <= 3; index += 1) {
            ingredientesVeg.push(ingredientes[index])
        }
    } else {
        for(let index = 0; index < ingredientes.length; index += 1) { 
            sanduiche.push(ingredientes[index])
    }
    }

    sanduiche.push(ingredientesVeg)
    sanduiche.push(pao);
    sanduiche.unshift(pao);
    
}

console.log('Sanduíche: ' + sanduiche);