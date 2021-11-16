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
document.getElementById("teste").innerText = 'Aprendizados da aul de hoje';
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

