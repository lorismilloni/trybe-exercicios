# Bloco 2.1 - Git, GitHub e Internet

  Os principais pontos abordados serão:

- ​      O que é o                         ***Git\***                    ?    
- ​      Qual a principal diferença para os outros  `VCS's`      ?    
- ​      Como configurar o                         ***Git\***                     na sua máquina?    
- ​      Como iniciar um repositório local?    
- ​      O que é o                         ***GitHub\***                    ?    
- ​      Como subir seu repositório local para o                         ***GitHub\***                    ?    
- ​      O que é               *Branch*            ,               *Merge*            ,               *Commit*            ?    

###   Você será capaz de:

- ​      Instalar e configurar o                         ***Git\***                     no seu computador;    
- ​      Salvar seus projetos no repositório                         ***Git\***                     local;    
- ​      Controlar as alterações e versões dos seus arquivos;    
- ​      Enviar seus projetos para o repositório remoto do                         ***GitHub\***                    .    

O git é um mecanismo de contrile de versão distribuído. Guarda um conjunto de alterações através dos commits.

O github é plataforma que hospeda repositórios do Git.

Três conceitos importantíssimos para o seu trabalho:

- ​      Ramificação (Branching);    
- ​      Mesclagem (Merge);    
- ​      Resolução de conflitos.

## Atalhos usados

``` 
git init // cria repositório git na pasta
git log // historico de commits etc
git add . // adiciona tudo no local
git add arquivo.txt
git status // status do repositório
git diff // diferença entre pasta local e repositório
git commit -m 'descricao' // comitar
git commit -a -m 'descricao'
git branch // mostra branchs no repositório local
git branch nome // cria novo branch
git checkout nome // muda para o branch nomeado
git branch --all
git branch -d branch // deleta branch, com D deleta local e remoto
git fetch --prune // atualiza branch deletado
git push repositorio --delete nomeDaBranch // deleta branch do repositório remoto
git merge nome_branch // merge o branch
git merge --continue // continua o merge
git push repositorio master // atualiza os repositorios com os novos objetos
git pull repositorio master // atualiza dos repositorios e integra com um branch local
git rm --cached arquivo.txt // the file will be removed from the index tracking your git project
git restore --staged.txt // overwrites <file> in your index with the current HEAD from the local repository
git remote -v
```

# 2.2 - Git & GitHub - Entendendo os comandos

- copiar repositórios `git clone`
- abrir pull requests
- trabalhar em um mesmo projeto, com mais de uma pessoa, de forma assíncrona e distribuída.

**git log e git clone**

```
git clone urlDoSeuRepositórioTrybeExercises // clona o repositorio
code . // abre o diretorio no VSC
ctrl + l // também limpa o terminal
```

**git remove**

```
git rm arquivo.txt // remover arquivo
git log --diff-filter=D --summary // mostra os arquivos deletados em sumário
git checkout numero_do_commit~1  arquivo.txt // numero: primeiros 4 digitos do commit, ~1 = retorna o arquivo para o status válido
```

**git ignore**

```
.gitignore
cat >> .gitignore // adiciona a informação ao arquivo, como *.txt, ou arquivos.xls, diretorio/
```

**git fetch, pull e push**

```
git init
git remote add repositorio git@github.com:...
git commit -m 'mensagem do commit'
git push -u repositorio master // configura os pushs para o local e branch
git push // empurra para o repositório
git fetch // puxa do remoto para o repositório local
git pull // verifica se tem alguma alteração e já faz o merge
```

###   Recapitulando

  Agora você já pode esquecer que um dia versionou os arquivos adicionando o nome da versão no final! 😉

- ​      O Git é um sistema de versionamento distribuído (DVCS);    

- ​      A maior vantagem do               **Git**             é que ele é distribuído, ou seja, o repositório fica na sua máquina e você não precisa se preocupar em fazer               *"lock"*             de arquivos assim como em outros               *VCS's*            ;    

- ​      Vimos que a instalação do               **Git**             e sua configuração são simples. Basta baixar o instalador e configurá-lo usando o comando  `git config`      ;    

- ​      Para iniciar um repositório local, vimos que você tem duas opções:    

  - `git init`                           *(para criar um novo repositório                       **Git**                    )*                ;      
  - `git clone`                           *(para copiar um repositório                       **Git**                     existente para sua máquina e, assim, poder criar branches e Pull Requests)*                .      

- ​      O GitHub é uma plataforma de hospedagem de código-fonte com controle de versão usando o Git;    

- ​      Vimos também que, para subir seu código para o               **GitHub**            , basta você verificar qual das opções abaixo deseja:    

  1. ​        Criar um repositório do zero localmente, na sua máquina, onde utilizará o comando  `git init`        ;      
  2. ​        Trabalhar num repositório já existente, onde utilizará o comando  `git clone`        ;      

  ​              **Esses dois comandos são                   \*excludentes\*                , ou seja, você usa um, ou usa o outro,                   \*nunca\*                 os dois ao mesmo tempo. Após isso, siga um dos dois fluxos abaixo**          

- ​              **Fluxo 1**             - Após  `git init`      :    

  1. ​        Criar seu primeiro  `commit`        ;      
  2. ​        Criar o repositório remoto na sua conta do                   **GitHub**                ;      
  3. ​        Adicionar a                   *URL*                 do repositório remoto;      
  4. ​        Executar o famoso  `push`        .      

- ​              **Fluxo 2**             - Após  `git clone`      :    

  1. ​        Criar sua branch dentro do repositório clonado;      
  2. ​        Fazer checkout na sua branch;      
  3. ​        Criar seu primeiro  `commit`        ;      
  4. ​        Executar o famoso  `push`        .      
