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
git branch // mostra branchs
git branch nome // cria novo branch
git checkout nome // muda para o branch nomeado
git merge nome_branch // merge o branch
git merge --continue // continua o merge
git push repositorio master // atualiza os repositorios com os novos objetos
git pull repositorio master // atualiza dos repositorios e integra com um branch local
git rm --cached arquivo.txt // the file will be removed from the index tracking your git project
git restore --staged.txt // overwrites <file> in your index with the current HEAD from the local repository
```

