//desafio 6
let numbers = [9, 1, 2, 3, 9, 5, 7];

function highestCount(numbers) {
    let compare = [];
    let maior = [];
    for (let index = 0; index < numbers.length; index += 1) {
        if (numbers[index] > compare) {
            compare = numbers[index];
        }
        for (let index = 0; index < numbers.length; index +=1) {
            if (compare === numbers[index]) {
                maior+=1;
            }
        }
    }
    return maior;
}

for (let index = 0; index < numbers.length; index += 1) {
    let maior = [];
    let compare = numbers[index];
    if (numbers[index] > compare) {
        maior.push(numbers[index]);
    }
    console.log(maior);
}
