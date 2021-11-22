[toc]

# DOM e seletores

## Document Object Model

É uma interface que representa como os  `HTML`   e  `XML`   são lidos pelo browser.

```html
<head>
    <link>
</head>
<body>
	<div id='teste'>
    
    	</div>
	<script src="script.js"></script>
</body>
```

```html
<head>
    <link>
</head>
<body>
	<div>
    
    	</div>
	<script> //adicionar ao final do body para garantir que vai ser carregado somente ao final da página
	console.log('oi');
	</script>
</body>
```

`getElementById()`

```javascript
console.log(document.getElementById("teste"));
console.log(document.getElementById("teste").innerHTML); //acessar o conteúdo, com tags
console.log(document.getElementById("teste").innerText); //retorna somente o conteúdo
console.log(document.getElementById("teste").style); //retorna o css aplicado na tag 
```

* alterando propriedades:

```javascript
document.getElementById("teste").innerText = 'Aprendizados da aula de hoje';
```

`getElementsByClassName()`

* sempre tratar como lista;

```html
<body>
    <p class="lenda">
        Airton Senna
    </p>
    <p class="piloto-f1-atual">1</p>
    <p class="piloto-f1-atual">2</p>
    <p class="piloto-f1-atual">3</p>
</body>
```

```javascript
document.getElementsByClassName("lenda");
document.getElementsByClassName("piloto-f1-atual")[0].innerText = "Stroll";

let pilotosDeF1 = document.getElementsByClassName("piloto-f1-atual");

for (let i = 0; i < pilotosDeF1.length; i += 1) {
    console.log(pilotosDeF1[i]);
    pilotosDeF1.innerText = "Lewis Hamilton";
}
```

`getElementsByTagName()`

* lista de elementos;

```html
<div class="piloto-f1-atual">George Russel</div>
<div class="piloto-f1-atual">Daniel Riccardo</div>
<span class="piloto-f1-atual">Kevin Magnussen</span>
```

```javascript
document.getElementsByTagName("span")[0].innerText = "Carlos Sainz";
```

`querySelector`

* só retorna a primeira ocorrência que ele encontrar;

```html
<body>
    <div class="pilotos-com-titulo">
        <div class="piloto-f1-atual">George Russel</div>
        <div class="piloto-f1-atual">Daniel Riccardo</div>
        <span class="piloto-f1-atual">Kevin Magnussen</span>
    </div>
    <div class="pilotos-sem-titulo">
        <p class="piloto-f1-atual">1</p>
        <p class="piloto-f1-atual">2</p>
        <p class="piloto-f1-atual">3</p>
    </div>
</body>
```

```javascript
document.querySelector("#id");
document.querySelector(".pilotos-sem-titulo p");
document.querySelector(".pilotos-sem-titulo .pilotos-f1-atual");
```

`querySelectorAll`

* retorna todos os elementos, não só o primeiro;

```html
<body>
    <div class="pilotos-com-titulo">
        <div class="piloto-f1-atual">George Russel</div>
        <div class="piloto-f1-atual">Daniel Riccardo</div>
        <span class="piloto-f1-atual">Kevin Magnussen</span>
    </div>
    <div class="pilotos-sem-titulo">
        <p class="piloto-f1-atual">1</p>
        <p class="piloto-f1-atual">2</p>
        <p class="piloto-f1-atual">3</p>
    </div>
</body>
```

```javascript
document.querySelectorAll("p")[0].innexText = "Lenda";
document.querySelectorAll(".piloto-f1-atual")[0].innexText = "";
```

## Aula

```html
console.log(document.body);
<div id="cont2"></div>
```

```javascript
//buscar elementos anteriores;
let minhaTag = cont2.parentNode;
//buscar elementos filhos;
let minhaTag = cont2.children;
//buscar a partir de qualquer elemento;
cont2.getElementsByClassName('estilo1');
//com função
function clearTextByTagName(tagName) {
    let tags = document.getElementsByTagName(tagName);
    for (let i = 0; i < tags.length; i++) {
        if (tags[i].classList == 'cont2') {
            continue;
        }
        tags[i].innerText = '';]
    }
    //console.log(tags)
}

cleatTextByTagName('cont2')
```

* chamar a função:

```
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
```

* return da função:

```
dentro do for a cada iteração vai acontecer um return, na primeira iteração já vai sair da função;
```

[toc]

# Trabalhando com elementos

- Adicionar e remover elementos HTML da página via JavaScript;
- Buscar os elementos da página com a propriedade parentNode.

```javascript
document.querySelector('.ingredient-item').parentNode.parentNode.parentNode
```

- `parentNode`: retorna o nó pai.    
- `parentElement` : retorna o elemento pai.    
- `childNodes`: retorna um NodeList com todos os nós filhos.    
- `children`: retorna um HTMLCollection com todos os elementos filhos.    
- `firstChild`: retorna o primeiro nó filho.    
- `firstElementChild`: retorna o primeiro elemento filho.    
- `lastChild`: retorna o último nó filho.    
- `lastElementChild`: retorna o último elemento filho.    
- `nextSibling`: retorna o próximo nó.    
- `nextElementSibling`: retorna o próximo elemento.    
- `previousSibling`: retorna o nó anterior.    
- `previousElementSibling`: retorna o elemento anterior.    

```html
<!-- arquivo index.html -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>  
  <main>
    <div id="start"></div>
    nó
    <p>elemento</p>
  </main>
  <script src="script.js"></script>
</body>
</html>
```

```javascript
// arquivo script.js

console.log(document.getElementById('start').nextSibling) // nó

console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>
```

```javascript
let ingredientList = document.querySelector('.ingredients-list');

for (let index= 0; index < ingredientesItems.length; index += 1) {
	let ingredient = ingredientItems[index];
	
	let ingredientListItem = document.creatElement('li'):
	ingredientListItem.innerText = ingredient;
	
	ingredientList.appendChild(ingredientListItem)
}
```

```javascript
let ingredientListItems = document.querySelectorAll('.ingredients-list-item');

for (let index = 0; index < ingredientListItems.length; index += 1) {
	let element = ingredientListItem[index];
	
	if (element.innerText.includes('toucinho')) {
		ingredientList.removeChild();
	}
}
```

## Aula



```html
<main>
    <div id='first' class='main-box'>
		<p id='first'>primeiro p</p>
        <p>segundo p</p>
    </div>
    <div id='second' class='main-box'>
        
    </div>
    <div id='third'>
        <div id='drawing' class='red circle small'>       </div>
    </div>
</main>
```

```javascript
let div = document.createElement('div');
div.className = 'main-box';
div.id = 'fourth';
div.innerText = 'conteúdo blablabla';

main.appendChild(div);
main.removeChild(div);
document.body.appendChild();

let firstElem = document.querySelector('#first').firstElementChild;
console.log(firstElem)
console.dir(firstElem) //força o inspetor do browser a mostrar as propriedades dos elementos;

let proxElem = document.querySelector('#first').nextElementSibling;

drawing.className = 'yellow circle small'; //substitui literalmente todo o conteúdo

drawing.classList.add('yellow'); //classList vai adicionando os elementos ao conteúdo
drawing.classList.add('circle');
drawing.classList.add('small');

drawing.classList.remove('yellow'); //classList vai adicionando os elementos ao conteúdo
drawing.classList.remove('circle');
drawing.classList.remove('small');

console.log(drawing.classList);
```

`converter array em string`

```javascript
let frutas = ['Banana', 'Laranja', 'Maçã', 'Manga'];
let resultado = frutas.join(',')
```

`converter uma string em array`

```javascript
let frutasArr = resultado.split(''); //assim ele vai quebrar letra por letra
let frutasArr = resultado.split(',');
console.log('frutasArr: ', frutasArr);
```

`exemplo de função`

```javascript
let arrClasses = ['yellow', 'circle', 'small'];

function createCustomElement(myClasses) {
    let element = document.createElement('div');
    let str = myClasses.join(' ');
    element.className = str;
    
    document.body.appendChild(element);
}
```

[toc]

# Eventos

* Utilizar os eventos do JavaScript para fazer com que funções sejam executadas quando alguém as usam ou quando o navegador fizer alguma interação com a sua página web.
* Mudar o conteúdo, estilo e outros atributos de elementos HTML a partir de eventos do  *JavaScript*;    
*  Aplicar no seu código *JavaScript* eventos de  `click` e  `change`, entre outros.
* Praticamente qualquer interação de quem usa com a página pode ser considerada um evento. O *rolar da tela*, o       *passar do mouse*  por um elemento, o *click do mouse*, o  *digitar do teclado*, entre outros.

`event listener`

`DOM on event handlers ` 

```javascript
<body>
    <p id="trybe">
        Olá, somos a Trybe e temos uma oferta imperdível para você...
    </p>

    <button onclick="maisInfos();">Mais informações</button>

    <p id="trybe-continua"></p>
    <script>
        window.onload = jsCarregado

        function jsCarregado() {
            alert("Página foi carregada!")
        }

		function maisInfos() {
            let textoMaisInfo = document.getElementById("trybe-continua");
            textoMaisInfo.innerText = "Aqui você vai aprender Hard Skills";
        }
    </script>
</body>
```

`inline event handlers`

```javascript
<button onclick="maisInfos();">Mais informações</button>
```

`addEventListener(tipoEvento, função)`

* permite adicionar 'escutadores' de forma mais flexível;
* código JavaScript somente na parte do JavaScript;

`click`, `change`, `mouseover`, `keydown`, `scroll`, `dbclick`, `mouseleave`, `keyup`;

```javascript
<script>
    //Exemplo 1 - Click
    let click = document.getElementById("clicar");

	//Adiciona o evento de click
	clickP.addEventListener("click", recebeClick);

	function recebeClick(eventoDeOrigem) {
        //Objeto evento
        //As duas principais propriedades:
        //Target: O elemento que originou esse mesmo evento
        //Type: O tipo de evento que originou o click - Mouse, Keyboard, Screen...
        console.log(eventoDeOrigem.target);
        console.log(eventoDeOrigem.type);
    }
</script>
```

## Aula

`Eventos`

```javascript
pessoa.depoisDeAcordar

function ritualDaManha() {

levantarDaCama(),

tomarCafé()

};

button.addEventListener
```

​	`index.html`

```html
<body>
	<section clas="center">
		<h1 class="title-heading>Corrida maravilhosa"</h1>
		
	</section>
</body>
```

​	`script.js`

```javascript
console.log(window.onload);

function funcaoMagica() {
    console.dir(document.querySelector('div'));
}

window.onload = funcaoMagica; // apenas atribui o identificador, imprimindo assim a função
window.onload = funcaoMagica(); // roda a função

// rodando
// param1 = qual o tipo do evento;
// param2 = o que deve ser feito quando o evento for disparado;

window.onload = function() {
    const button = document.querySelector('#start-race-btn');
    
    const car1 = document.querySelector('.car1');
    const car2 = document.querySelector('.car2');
    
    function reset() {
    car1.style.marginLeft = '0px';
    car2.style.marginLeft = '0px';
    }
    
    reset();
    
    // button.addEventListener('1', 2) // button.addEventListener('click', function xulambs() { })
    button.addEventListener('click', function (event){
        // console.log('clicou!');
        const car1 = document.querySelector('.car1');
        
        // car1.style.marginLeft = '100px';
        car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random() * 100 + 'px';
        car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random() * 100 + 'px';
        
        if (parseInt(car1.style.marginLeft) > window.innerWidth) {
            alert('Carro VERMELHO ganhou!!!');
            reset();
        }
        
        if (parseInt(car2.style.marginLeft) > window.innerWidth) {
            alert('Carro VERDE ganhou!!!');
            reset();
        }
    });
    
    // Event Bubbling
    
    document.querySelector('.car-section') // faltou terminar a linha aqui
    console.log('target:', event.target);
    console.log('current target:', event.currentTarget);
}
```

`window.innerWidth`, `window.outerWidth`

# Web Storage

- Provê mecanismos para que as aplicações web possam salvar dados nos browsers das pessoas;
- Antes do HTML 5, as aplicações tinham que salvar os dados locais em cookies, que eram enviados para o servidor a cada requisição do *browser*. Web Storage é mais seguro e tem a capacidade de salvar uma quantidade maior de dados sem afetar o desempenho da página;
- O limite de armazenamento é muito maior (pelo menos 5MB), e as  informações não são transferidas para o servidor durante as requisições;
- **Web Storage** é por origem (por domínio e protocolo). Todas as páginas de uma  origem podem salvar e acessar os mesmos dados. Por exemplo, se o domínio `betrybe.com` salva o dado  `X` no **Web Storage**, o domínio  `course.betrybe.com` consegue ler esse dado  `X` ;
- Quando você inicia um vídeo no YouTube e depois retorna, o vídeo continua de onde parou. Um carrinho de  compras de um site permanece com os itens que você adicionou durante  semanas e uma página é apresentada já com o seu nome, e você nem fez  login;
- Esses são exemplos de aplicações que utilizam o *browser* para salvar esses dados e facilitar a criação de tais funcionalidades;
- Esse armazenamento local é o conteúdo de hoje, **Web Storage**;

`objetivos`

- Manipular o objeto  `localStorage` ;    
- Manipular o objeto  `sessionStorage` ;
- Você irá aprender como utilizar cookies, localStorage e sessionStorage para salvar informações. Também saberá quais são as diferenças entre estes métodos e quando utilizar cada um deles;



```
document.cookie = "email=isabella@email.com";
document.cookie = "email=isabella@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC";
document.cookie = "email=isabella@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC; path=/";
```

```
const myCookie = document.cookie;
console.log(myCookie) // email=isabella@email.com
document.cookie = "email=cleyton@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC";
document.cookie = "email=; expires=Tue, 01 Dec 2020 12:00:00 UTC;"
```

`HTML Web Storage`

`localStorage` salva os dados **sem data de expiração**. Os dados não serão removidos quando o *browser* for fechado, ou seja, eles ficarão disponíveis enquanto não forem explicitamente removidos;

`index.html`

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Dê uma olhada no seu console para checar os exemplos sendo impressos.<br />;)</h1>
  <script src="script.js"></script>
</body>
</html>

```

`script.js`

```javascript
console.log(localStorage.length) // não possui nada salvo, então o retorno é o valor: 0
localStorage.setItem("firstname", "Adam") //salva uma entrada com a key = "firstname" e value = "Adam"
localStorage.setItem("lastname", "Smith") //salva uma entrada com a key = "lastname" e value = "Smith"
console.log(localStorage.getItem("lastname")) // retorna o valor "Smith"
console.log(localStorage.length) // possui duas entradas, então o retorno é o valor: 2
localStorage.removeItem("lastname") // remove a entrada referente a key = "lastname"
console.log(localStorage.length) // possui uma entrada, então o retorno é o valor: 1
localStorage.clear() // limpa todas as entradas salvas em localStorage
console.log(localStorage.length) // não possui nada salvo, então o retorno é o valor: 0
```

`sessionStorage` salva os dados apenas para a sessão atual. Os dados são removidos assim que a pessoa fecha a aba (tab ) ou o browser;

```javascript
console.log(sessionStorage.length) // não possui nada salvo, então o retorno é o valor: 0
sessionStorage.setItem("firstname", "Adam") //salva uma entrada com a key = "firstname" e value = "Adam"
sessionStorage.setItem("lastname", "Smith") //salva uma entrada com a key = "lastname" e value = "Smith"
console.log(sessionStorage.getItem("lastname")) // retorna o valor "Smith"
console.log(sessionStorage.length) // possui duas entradas, então o retorno é o valor: 2
sessionStorage.removeItem("lastname") // remove a entrada referente a key = "lastname"
console.log(sessionStorage.length) // possui uma entrada, então o retorno é o valor: 1
sessionStorage.clear() // limpa todas as entradas salvas em sessionStorage
console.log(sessionStorage.length) // não possui nada salvo, então o retorno é o valor: 0
```

`localStorage` e `sessionStorage`

```javascript
let organization = {
  name: "trybe",
  since: 2019
}

// objeto "storage" pode ser localStorage ou sessionStorage

storage.setItem("trybe", JSON.stringify(organization))
let org = JSON.parse(storage.getItem("trybe"))
console.log(org) // { name: "trybe", since: 2019 }

let classes = ["2019/set", "2019/oct"]
storage.setItem("classes", JSON.stringify(classes))
let cls = JSON.parse(storage.getItem("classes"))
console.log(cls) // ["2019/set", "2019/oct"]
```

```
localStorage.setItem("name", "Gabriel Oliva");
localStorage.getItem(nomeDaChave);
localStorage.getItem("name");
let username = localStorage.getItem("name");
localStorage.removetItem("name");
localStorage.setItem('email', 'gabriel.oliva@betrybe.com');
localStorage.getItem("email");
localStorage.clear();
```

```
sessionStorage.setItem('darkMode', 'true');
sessionStorage.clear();
```

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exemplo WebStorage</title>
</head>
<body>
  <header>
    <h1>Diferenças de armazenamento entre LocalStorage e WebStorage</h1>
  </header>
  <main>
    <section>
      <h2>Frases armazenadas</h2>
      <input type="text" id="phrases-input" />
      <button id="add-button">Adicionar frase</button>
      <div>
        <ul id="phrases-list">
        </ul>
      </div>
    </section>
  </main>
  <script src="script.js"></script>
</body>
</html>
```

```javascript
const button = document.getElementById('add-button');
const input = document.getElementById('phrases-input');
const list = document.getElementById('phrases-list');

function addPhraseToLocalStorage() {
  const oldList = JSON.parse(localStorage.getItem('phrases'));
  const phraseText = input.value;
  oldList.push(phraseText);
  localStorage.setItem('phrases', JSON.stringify(oldList));
  insertPhraseInDOM();
};

function insertPhraseInDOM() {
  const phrasesList = JSON.parse(localStorage.getItem('phrases'));
  const listLength = phrasesList.length - 1;
  const phraseText = phrasesList[listLength];
  const phrase = document.createElement('li');
  phrase.innerText = phraseText;
  list.appendChild(phrase);
};

function initialRenderization() {
  if (localStorage.getItem('phrases') === null) {
    localStorage.setItem('phrases', JSON.stringify([]));
  } else {
    const phrasesList = JSON.parse(localStorage.getItem('phrases'));
    const listLength = phrasesList.length - 1;
    for (let index = 0; index <= listLength; index += 1) {
      const listElement = document.createElement('li');
      listElement.innerText = phrasesList[index];
      list.appendChild(listElement);
    };
  };
};

button.addEventListener('click', addPhraseToLocalStorage);

window.onload = function() {
  initialRenderization();
};
```

```javascript
const button = document.getElementById('add-button');
const input = document.getElementById('phrases-input');
const list = document.getElementById('phrases-list');

function addPhraseToSessionStorage() {
  if (sessionStorage.getItem('phrases') === null) {
    sessionStorage.setItem('phrases', JSON.stringify([]));
  }
  const oldList = JSON.parse(sessionStorage.getItem('phrases'));
  const phraseText = input.value;
  oldList.push(phraseText);
  sessionStorage.setItem('phrases', JSON.stringify(oldList));
  insertPhraseInDOM();
};

function insertPhraseInDOM() {
  const phrasesList = JSON.parse(sessionStorage.getItem('phrases'));
  const listLength = phrasesList.length - 1;
  const phraseText = phrasesList[listLength];
  const phrase = document.createElement('li');
  phrase.innerText = phraseText;
  list.appendChild(phrase);
};

button.addEventListener('click', addPhraseToSessionStorage);
```

## Aula

```
localStorage.key
JSON.parse()
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);
```

