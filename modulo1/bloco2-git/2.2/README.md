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
.giti
```

