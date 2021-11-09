[toc]

# JavaScript: primeiros passos

- O que é o JavaScript (JS)?
- De onde surgiu?
- Qual o seu uso?
- Variáveis.
- Constantes.
- Tipos primitivos.
- Tipagem dinâmica.
- Operadores aritméticos.
- Operadores de atribuição.
- Operadores lógicos.
- Estruturas condicionais como if/else e switch/case.

**Objetivos**

Escrever códigos em JavaScript que usam variáveis, constantes e tipos primitivos;
Utilizar conceitos da linguagem como a tipagem dinâmica e operadores lógicos/aritméticos/de atribuição no seu código;
Criar códigos que usam estruturas condicionais, como o `if/else`.

```javascript
let
```

- não começar nome de variável com número;
- não usar palavras com espaço;
- usa camelCase ou snake_case para nomear as variáveis; 
- é possível reatribuir valores para `let`;
- não é possível reatribuir valores para variáveis constantes `const`;
- strings se escrevem entre aspas; são valores em linha com vários caracteres;
- números se escrevem sem aspas;
- valores booleanos: `true` or `false`;
- valores indefinidos: `let xulambs;`;
- valor nulo: `let = null;`;
- JS é uma linguagem de tipagem fraca;
- comentários em linha são feitos com //, ou em bloco com /* */;
- "iniciar a variável" é a expressão usada para exemplificar quando a declaramos;
- `=` atribuir, `==` igual, `===` estritamente igual, valor e tipo do valor;

## Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas

```javascript
let movie = "Avengers"; //string literal
let score = 10; //number literal, seja inteiro ou decimal
let isValid = true; //valor booleano
let name; //variável indefinida
let color = null; //aguardando redefinição de valor
typeof movie //o console dá o valor da variável
let salary = 3500;
console.log(salary + salary);
console.log(salary - salary);
console.log(salary * salary);
console.log(salary / salary);
console.log(3 ** 3);
salary++; 
console.log(salary);
3501;
salary--;
console.log(salary);
3499;
const patientInfo = {
    firstName: 'Ana',
    lastName: 'Santos',
}; // valor de tipo objeto
```

## Condições If e Else

```javascript
//if - se
//else - senão

if (condicao) {
    //codigo
} else if (outraCondicao) {
    //outra condicao
} else {
    //se nenhuma das outras condicoes for verdadeira, essa sera executada
}
```

## Operadores lógicos

```javascript
&& //and, só é true quando as duas condições são verdadeiras
|| //or, só é falso quando as duas condições forem falsas
! //not, inverte o valor booleano de um elemento
    
&&
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

||
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

!
console.log((2 + 2) === 4); //true
console.log(!(2 + 2) === 4); //false
console.log(!42); // false
console.log(!0); // true, porque o número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.
console.log(!null); // true
console.log(!undefined); // true
```

## Switch case

```javascript
let trafficLight;

switch(trafficLight) {
    case "vermelho":
        console.log("pare");
        break;
    default:
    	console.log("valor não identificado");
    	break;
}
```

## Exercícios

1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, `a` e `b`, definidas no começo com os valores que serão operados. Faça programas para:  

- Adição (a + b)  
- Subtração (a - b)  
- Multiplicação (a * b)  
- Divisão (a / b)  
- Módulo (a % b)  

  Dica: Neste [link](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Math) você encontra mais detalhes sobre operadores matemáticos 😉

1. Faça um programa que retorne o maior de dois números. Defina no  começo do programa duas constantes com os valores que serão comparados.    
2. Faça um programa que retorne o maior de três números. Defina no  começo do programa três constantes com os valores que serão comparados.    
3. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for  negativo e "zero" caso contrário.    
4. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne `true` se os ângulos representarem os ângulos de um triângulo e `false`, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.    

- [Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.](https://blogdoenem.com.br/triangulos-propriedades/)    
-  Um ângulo será considerado inválido se não tiver um valor positivo.    

1.  Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.  

- Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, *sem*             aumentar a quantidade de condicionais.    
- Como dica, você pode pesquisar uma função que faz uma *string*             ficar com todas as letras minúsculas  *(lower case)*  .    
- Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.    
- Exemplo:  `bishop`  (bispo) ->  `diagonals`  (diagonais)    

1. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:  

- Porcentagem >= 90 -> A    
- Porcentagem >= 80 -> B    
- Porcentagem >= 70 -> C    
- Porcentagem >= 60 -> D    
- Porcentagem >= 50 -> E    
- Porcentagem < 50 -> F    
- O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.    

1. Escreva um programa que defina três números em constantes e retorne  `true` se pelo menos uma das três for par. Caso contrário, ele retorna  `false`.  

- **Bonus:** use somente um `if` .      

1. Escreva um programa que defina três números em constantes e retorne  `true` se pelo menos uma das três for ímpar. Caso contrário, ele retorna  `false`  .  

- **Bonus:**  use somente um `if`.      

1. Escreva um programa que se inicie com dois valores em duas  constantes diferentes: o custo de um produto e seu valor de venda. A  partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.  

- Atente que, sobre o custo do produto, incide um imposto de 20%.    
- Seu programa também deve emitir uma mensagem de erro e encerrar  caso algum dos seus valores de entrada seja menor que zero.    
- O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do  valor de custo.    
  - valorCustoTotal = valorCusto + impostoSobreOCusto      
  - lucro = valorVenda - valorCustoTotal (lucro de um produto)      

1. Uma pessoa que trabalha de carteira assinada no Brasil tem  descontados de seu salário bruto o INSS e o IR. Faça um programa que,  dado um salário bruto, calcule o líquido a ser recebido.  

- A notação para um salário de R$1500,10, por exemplo, deve ser  1500.10. Para as faixas de impostos, use as seguintes referências:    
  - INSS (Instituto Nacional do Seguro Social)        
    - Salário bruto até R$ 1.556,94: alíquota de 8%          
    - Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%          
    - Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%          
    - Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88          
  - IR (Imposto de Renda)        
    - Até R$ 1.903,98: isento de imposto de renda          
    - De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto          
    - De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto          
    - De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto          
    - Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.          

**Exemplo**: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:

- O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua  alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$  330,00.    
- Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.    
- Para pegar o valor do IR, temos um salário (já deduzido o INSS)  entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com  parcela de R$ 142,80 a deduzir do imposto. Assim, temos:    
  - R$ 2.670,00: salário com INSS já deduzido;      
  - 7.5%: alíquota de imposto de renda;      
  - R$ 142,80 parcela a se deduzir do imposto.      
- Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45    
- O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.    

​    Resultado: R$ 2.612,55.

**Dica:** que tal identificar as alíquotas com variáveis de nomes explicativos?*  

## Aula

HTML

```html
<head>
    
</head>
<body>
    <script src="script.js"></script>
</body>
```

JavaScript

```javascript
let age = 17;

if (age >= 18) {
    console.log('Pode dirigir!');
} else {
    console.log('Não pode dirigir!');
}

if (age = 18) {
    console.log('Pode dirigir, mas com cuidado!');
} else if (age > 18) {
	console.log('Pode dirigir!')
} else {
    console.log('Não pode dirigir!');
}
```

switch vs. if/else

```javascript
let weekDay = 4;

switch (weekDay) { 
    // enum: uma estrutura de dados que com ela você define uma 
    // quantidade de valores finita
    case 1:
    	console.log('Domingo');
        break;
    case 2:
    	console.log('Segunda');
        break;
    case 3:
    	console.log('Terça');
        break;
    case 4:
    	console.log('Quarta');
        break;
    case 5:
    	console.log('Quinta');
        break;
    case 'xablau':
        console.log('Que dia maravilhoso!');
        break;
    default: console.log('Não existe esse dia, ainda');
        break;
}

switch (weekDay) {
    case 1:
    case 7:
    	console.log("fim de semana");
        break;
    default:
    	console.log("dia de semana");
    	break;
}
```

# Arrays e Loop For

## Variáveis simples e compostas:

```javascript
let pizza1 = '4 queijos';
let pizza2 = 'Frango com catupiry';
let pizza3 = 'Palmito';
```

```javascript
let pizzas = ['4 queijos', 'Frango com catupiry', 'Palmito'];
pizzas[3] = 'Peito de peru';
pizzas.push('Marguerita');
pizzas.length;
pizzas.sort();
pizzas[2];
for (let index = 0; index < pizzas.length; index += 1) {
	console.log(pizzas[index]);
}
```

## .push() e .unshift()

```javascript
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList);
```

* se precisarmos adicionar no início, podemos usar o  `.unshift()`;

## .pop() e .shift()

```javascript
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.pop();  // remove a última tarefa
console.log(tasksList);

// ['Tomar café', 'Reunião']
```

* se precisarmos remover o primeiro item da lista, podemos usar o  `.shift()`;

## indexOf

```javascript
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);

// 1
```

## for of

```javascript
let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}

// resultado: 
//1
//2
//3
//4
//5

let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
// 11
// 21
// 31
```

## Aula

o que vermos com colchetes é array em qualquer linguagem de programação;

variáveis locais: criadas internamente, só existem dentro desse contexto; array de atribuição externa/global:

```javascript
let fruta1 = "maçã";
let fruta2 = "laranja";
let fruta3 = "abacaxi";

let frutas = [fruta1,fruta2,fruta3];
```

Atribuição híbrida:

```javascript
let frutas = [fruta1, fruta2, "abacaxi", false]
```

Saída de dados:

```javascript
console.log("saída: ", frutas) //saíria o array com os colchetes
console.log("saída: ", frutas[0])
```

For:

```javascript
let r = 0;

for (i = 0; i < 20; i++) {
	r += i;
}
```

i++ diferença:

```javascript
i++ = i + 1
i += 1 //é possível usar com 2, 3, 4, 5, não só 1
```

For of:

```javascript
let frutas = ["Maçã", "Laranja", "Abacaxi"];
for (let fruta of frutas) {
	console.log("resultado: ", fruta)
}
```

For e if

```javascript
let frutas = ["Maçã", "Laranja", "Abacaxi", "Limao", "Melancia"];
let frutasCitricas = ["Laranja", "Limao"]

for (let i = 0; i < frutas.length; i++) {
	if (frutas[i] == frutasCitricas[0]) {
		arrayFinal.push(frutas[i])
	}
}

for (let i = 0; i < frutas.length; i++) {
	if (frutas[i] == frutasCitricas[0] || frutas[i] == frutasCitricas[1]) {
		arrayFinal.push(frutas[i])
	}
}

for(let i = 0; i < arrayFinal.length; i++) {
    console.log("resultado: ", arrayFinal[i])
}
```

## Exercícios

```javascript
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
```

- Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
- Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
- Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
- A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
- Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
- Utilizando for, descubra qual o maior valor contido no array e imprima-o;
- Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
- Utilizando for, descubra qual o menor valor contido no array e imprima-o;
- Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
- Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

```javascript
for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] < array[secondIndex]) {
      let position = array[index];
      array[index] = array[secondIndex];
      array[secondIndex] = position;
    }
  }
}
```

* Ordene o array numbers em ordem crescente e imprima seus valores;

* Ordene o array numbers em ordem decrescente e imprima seus valores;

* Agora crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:

  `[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]`

