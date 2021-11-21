function soma() {
    let a = 7;
    let b = 13;
    let soma = a + b;
    return soma;
}

console.log(soma());

function subtracao() {
    let a = 4;
    let b = 9;
    let menos = a - b;
    return menos;
}

console.log(subtracao());

function multiply() {
    let a = 2;
    let b = 17;
    let multi = a * b;
    return multi;
}

console.log(multiply());

function division() {
    let a = 7;
    let b = 9;
    let div = a / b;
    return div;
}

console.log(division());

function modulo() {
    let a = 21;
    let b = 3;
    let modulo = a % b;
    return modulo;
}

console.log(modulo());

function maior() {
    const a = 25;
    const b = 31;
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(maior());

function maiorDeTres() {
    let a = Math.random()*100;
    let b = Math.random()*100;
    let c = Math.random()*100;
    if (a > b && a > c) {
        return a.toFixed(1);
    } else if (b > a && b > c) {
        return b.toFixed(1);
    } else {
        return c.toFixed(1);
    }
}

console.log(maiorDeTres());

function or() {
    const a = 0;
    if (a > 0) {
        return 'positive';
    } else if (a < 0) {
        return 'negative';
    } else {
        return 'zero';
    }
}

console.log(or());

function triangle() {
    const a = 120;
    const b = 20;
    const c = 40;
    // let soma = a + b + c;

    if (a + b + c === 180) {
        return true;
    } else if (a + b + c < 0) {
        return 'valor inválido'
    } else {
        return false;
    }
}

console.log(triangle());

function xadrez() {
    let bispo = 'diagonais';
    let cavalo = 'em L';
    let torre = 'retas';
    let piao = 'uma à frente';

    if (bispo) {
        return bispo;
    } else if (cavalo) {
        return cavalo;
    } else if (torre) {
        return torre;
    } else {
        return piao;
    }
}