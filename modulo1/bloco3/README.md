[toc]

# BLOCO 3

# 3.1 - Introdução - HTML & CSS

1. Primeiro você irá aprender a usar as principais tags do **HTML** para criar a estrutura das páginas web.
2. Depois, você vai aprender como usar o **CSS** para estilizar as tags, usando diferentes formas de selecionar os elementos **HTML**.
3. No terceiro dia, você vai aprender como alterar o posicionamento  dos elementos na página e como algumas propriedades específicas alteram  as dimensões dos elementos    
4. No último conteúdo, você aprenderá sobre o significado que cada elemento               **HTML** carrega e sobre como isso impacta a acessibilidade da página e a  interpretação do conteúdo por indexadores de pesquisa, como o Google    
5. Para fechar com chave de ouro, você desenvolverá a sua própria página, aplicando todo o seu conhecimento, de acordo com a especificação do projeto final    

- Estruturar páginas web com HTML utilizando as tags `html`, `head` e  `body` ;  
- Utilizar o HTML para estruturar textos e títulos;
- Utilizar o HTML para criar listas, *links* e adicionar imagens;

É através do HTML que você irá criar a estrutura de como a página vai ser exibida, definindo quais *tags* servirão para títulos, subtítulos, parágrafos, e outros conteúdos ricos como *links*, imagens, vídeos etc.

```bash
$ git status
On branch exercicios/3.1
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

  modified:   exercicio-1
  
# Se quiser adicionar os arquivos individualmente
$ git add caminhoParaArquivo

# Se quiser adicionar todos os arquivos de uma vez, porém, atente-se
para não adicionar arquivos indesejados acidentalmente
$ git add --all

$ git commit -m "Mensagem descrevendo alterações"
$ git log

$ git push -u origin exercicios/3.1 // -u = --set-upstream

# Quando quiser enviar para o repositório remoto
$ git push

# Caso você queria sincronizar com o remoto, poderá utilizar apenas
$ git pull
```

HTML: linguagem de marcação de texto, não de programação

HTML 5: 2014, possibilitou adicionar vídeos e áudios

- esqueleto da página
- o head inclui metadados
- possui uma estrutura primária com as chamadas 'tags'

### tags HTML

```html
<br>
<strong></strong>
<em></em>
<ul></ul> // unordered list, bolinha
<ol></ol> // ordered list, número
<li></li>
<p></p>
<img
	src="url ou caminho da pasta" 
	alt="descrição da imagem" 
	width="300px">
<hr>
<div>
<a href="https://www.url.com"</a>
<a 
        href="url" 
        target="_blank">texto</a>
<a href="#tag">texto</a></li>
	<p id="tag">texto</p>
```

comandos aula

```
cp ../images . -r // recursivo para copiar diretórios
```

### exercícios

Crie uma lista das pessoas que você já fez amizade na Trybe.

Adicione uma imagem que venha de uma URL externa.

Adicione uma imagem que está no seu computador, local.

Crie um parágrafo para cada pessoa da sua lista.

Crie um link entre a sua lista e os parágrafos de pessoas.

Crie um link para a página do Google.

## portfólio

Crie um novo diretório onde você vai desenvolver o seu portfólio. É importante que ele seja criado fora do seu diretório de exercícios, pois a sua manutenção daqui em diante será feita em outro ambiente; 

Inicie um novo repositório local com  `Git` no diretório que você criou na etapa 1;  

Crie um arquivo  `index.html` ;  

#### seu Portfólio Web deve ter as seguintes informações:

Seu nome completo;    

Uma foto atual sua, acompanhada de um texto alternativo, que deve ser a descrição da foto que você está usando;    

Uma breve descrição sobre você, destacando algumas informações como nacionalidade e a cidade/estado onde mora;    

Uma lista de habilidades que você possui, com destaque para aquela de que você mais se orgulha;

Um link interno para a sua foto;    

Um link externo para algum blog de que você goste, que abra em uma nova aba;    

Partes do seu portfólio destacadas com negrito e/ou itálico;    

Um índice com links internos para as diferentes seções do seu portfólio.    

# 3.2 - HTML & CSS - Primeiros passos em CSS

- Criar regras de estilo para tags HTML utilizando o CSS;  
- Utilizar os seletores de `tag` , `id` e  `class` para aplicar regras de CSS;  
- Alterar características da *fonte* e das cores de páginas web;  
- Utilizar CSS *inline* e *externo*.  

Antes de começar, vamos ao passo a passo do git:

```
$ git checkout main
$ git pull
$ git checkout -b exercicios/3.2
$ git status
```

Após todos os exercícios:

```
$ git add --all ou git add . ou git add arquivo.txt
$ git commit -m "Mensagem descrevendo alterações"
$ git log
$ git push -u origin branch

# Quando quiser enviar para o repositório remoto
$ git push

# Caso você queria sincronizar com o remoto, poderá utilizar apenas
$ git pull
```

Criar branch, e abrir o VSCode na pasta criada.

### estilos CSS

```html
<head>
	<meta>
	<title></title>
	<style>

    h2 {
      color: green;
    	}
    
    body {
      background-color: rgb(255, 400, 200);
    	}
        
    p, li {
        font-size: 16px;
        color: red;
        }
    
    #extinct-species {
      background-color: red;
    	}
    
    #description {
      color: orange;
    	}
    
    .list-style {
      background-color: blue;
      color: white;
    	}
    
	</style>
</head>
<body>
	<h2 id="description">Descrição:</h2>
	<p id="extinct-species">
	<ul class="list-style">
	  <li></li>
	</ul>
</body>
```

### estilos para texto

```css
<head>
	<meta>
	<title></title>
	<style>
	
		h2, h4, h1 {
			color: #11a36a;
			font-size: 2em; // duas vezes o tamanho do body
        	line-height: 55px;
        	font-weight: 100;
		}
	
		body {
			background-color: rgb(255, 400, 200);
			font-size: 20px;
		}
	
		p {
			font-family: Arial, Helvetica, sans-serif;
        	// é possível embutir fontes com o 'fonts.google.com'
            // através de um código, utilizando um link no estilo
            // <link rel="" href="">
		}
        
    	.trybe-green {
        	color: #11a36a;
        }
	
		.list-style {
			background-color: blue;
			color: white;
			font-weight: bold;
			font-style: italic;
			line-height: 40px;
			text-align: justify;
			text-decoration: underline;
		}
        
		#p1 {
        	color: red;
        }
        
    	.section-title {
        	line-height: 30px;
        	font-weight: 600;
        	font-size: 28px;
        	text-align: center;
        }
        
    	.testimonial-name {
       	 	line-height: 20px;
        	font-weight: 600;
        	font-size: 14px;
        }
        
    	.picture {
        	border-radius: 10px 50px 100px 200px 50%;
        	max-width: 120px;
        }
        
        .button {
            width: 200px;
            background-color: #11a36a;
            color: white;
            padding: 10px 30px;
            paddin-bottom: 50px;
            font-weight: 700;
            text-decoration: none;
            border-radius: 4px;
            text-align: center;
            line-height: 10px;
            display: block;
            margin: 20px auto;
            font-size: 18px;
        }

		.button:hover {
            background-color: #11a36a;
		}
        
	</style>
</head>
<body>
    <h3 class="trybe-green section-title"></h3>
    <p id=p1>
        lorem ipsum dolor <span class="trybe-green"></span>sit amet
    </p>
    <h4 class="testimonial-name trybegreen">
    Conrado Medeiros<br>
    Aluno da Turma de Setembro - BH
    </h4>
    <img src="" alt="" class="picture">
</body>
```

### CSS inline (má prática)

``` html
<h2 id="description" style="background-color: teal; font-family: Verdana, Geneva;"></h2>
```

### style.css

Folha de estilo que pode ser referenciada em outros arquivos.

```html
<head>
	<meta>
	<title></title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
```

### formatação

O ideal é que o HTML seja para estrutura e o CSS seja para formatação, para que você consiga mudar a formatação sem a estrutura da página.

### exercícios

1. Modifique o tamanho do h1 para 65 pixels

2. Modifique a cor do texto do h1 para laranja

3. Modifique a cor de fundo da lista não ordenada

4. Crie uma classe para modificar a cor de fundo da tag <p> e da <ul> ao mesmo tempo

5. Modifique o família do h1 para sans-serif

6. Deixe o parágrafo com o font-weight 600

7. Modifique o font-size do body para 16px

8. Coloque o tamanho do parágrafo com o tamanho de 3 vezes o padrão do body

9. Explore as propriedades font-style, line-height, text-align e text-decoration

10. Troque a cor de fundo de cada item da lista para a cor correspondente ao texto

11. Coloque todo o CSS criado até agora nos exercícios anteriores em um arquivo externo

### tarefinha

- procure uma paleta de cores que você se identifica;
- defina fontes diferentes para o seu nome e para a descrição que você criou;    
- defina uma cor base de background do seu *Portfólio Web*;    
- altere o estilo das tags que você usou para destacar algumas  informações, como sua nacionalidade e a cidade/estado onde mora;    
- coloque tamanhos diferentes para os elementos da lista de habilidades que você criou. Lembre-se de usar classes para cada um dos elementos;    

[toc]

# 3.3 - Seletores e posicionamento

- Compreender como funciona o *Box Model* do CSS e como os elementos da página se relacionam visualmente;  
- Posicionar elementos na página de diferentes formas;  
- Combinar e agrupar seletores de CSS para criar regras bem definidas.  

O CSS também é responsável pelo *layout* da página. Saber criar regras específicas que selecionam os elementos de maneira apropriada e posicioná-los na página permite que você  organize as informações da página como quiser.
Seletores de pseudoclasses permitem que você adicione lógica condicional de estilização.
