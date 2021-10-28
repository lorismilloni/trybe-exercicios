[toc]

# BLOCO 3

# 1 - Introdução - HTML & CSS

1. ​      Primeiro você irá aprender a usar as principais tags do               **HTML**             para criar a estrutura das páginas web    
2. ​      Depois, você vai aprender como usar o               **CSS**             para estilizar as tags, usando diferentes formas de selecionar os elementos               **HTML**          
3. ​      No terceiro dia, você vai aprender como alterar o posicionamento  dos elementos na página e como algumas propriedades específicas alteram  as dimensões dos elementos    
4. ​      No último conteúdo, você aprenderá sobre o               **significado**             que cada elemento               **HTML**             carrega e sobre como isso impacta a acessibilidade da página e a  interpretação do conteúdo por indexadores de pesquisa, como o Google    
5. ​      Para fechar com chave de ouro, você desenvolverá a sua própria  página, aplicando todo o seu conhecimento, de acordo com a especificação do projeto final    

### 

- ​    Estruturar páginas web com HTML utilizando as tags  `html`    ,  `head`     e  `body`    ;  
- ​    Utilizar o HTML para estruturar textos e títulos;  
- ​    Utilizar o HTML para criar listas,           *links*         e adicionar imagens; 

```
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

#### tags HTML

```
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
<a> href="https://www.url.com"</a>
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

index.html

```
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>HTML</title>
  </head>
  <body>
    <h1>Exercícios</h1>
    
  </body>
</html>
```

