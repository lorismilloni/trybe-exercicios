# 1.3 Unix & Bash - Parte 1

[TOC]

```
ls
ls -a // arquivos ocultos
mkdir
cd diretório
cd
cd ~ // dir inicial
cd .. // dir anterior
pwd
cp arquivo1 arquivo2
mv arquivo1 arquivo2 // move ou renomeio source to dest
rm arquivo
rmdir diretório
cat arquivo // exibe um arquivo
less arquivo // exibe um arquivo, uma página por vez
head arquivo // primeiras linhas
tail // últimas linhas
grep 'palavras-chave' arquivo // procura por palavras-chave no arquivo
// -iv palavra arquivo (não correspondem); -in (linha exata); -ic (quantidade de vezes)
wc arquivo // conta número de linhas [-l], palavras [-w], caracteres [-c]
? // corresponde a um caractere (?? corresponde a dois)
man comando // manual do comando
whatis comando // descrição do comando
apropos 'palavra-chave' // mostra os comandos com a palavra-chave
touch arquivo.txt // cria arquivo com extensão
```

up arrow: mostra os comandos que você já digitou

###   Parte I - Criação de arquivos e diretórios

​      **Dica** : Para criação de arquivos vazios você pode utilizar o comando  `touch nome-do-arquivo.extensao`  .

1. Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado  `unix_tests`       e navegue até ele.    
2. ​      Crie um arquivo de texto com o nome  `trybe.txt`      .    
3. ​      Crie uma cópia do arquivo  `trybe.txt`       com nome  `trybe_backup.txt`      .    
4. ​      Renomeie o arquivo  `trybe.txt`      .    
5. ​      Dentro de  `unix_tests`      , crie um novo diretório chamado  `backup`      .    
6. ​      Mova o arquivo  `trybe_backup.txt`       para o diretório  `backup`      .    
7. ​      Dentro de  `unix_tests`      , crie um novo diretório chamado  `backup2`      .    
8. ​      Mova o arquivo  `trybe_backup.txt`       da pasta  `backup`       para a pasta  `backup2`      .    
9. ​      Apague a pasta  `backup`      .    
10. ​      Renomeie a pasta  `backup2`       para  `backup`      .    
11. ​      Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.    
12. ​      Apague o diretório  `backup`      .    
13. ​      Limpe o terminal.    

​          **Para os exercícios 14 e 15, crie, de forma manual na parte gráfica  do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado  `skills.txt`    :**  

```sh
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL
```

1. ​      Mostre na tela as 5 primeiras skills do arquivo  `skills.txt`      .    
2. ​      Mostre na tela as 4 últimas skills do arquivo  `skills.txt`      .    
3. ​      Apague todos os arquivos que terminem em  `.txt`      .    



###   Parte II - Manipulação & Busca

1. ​    Na pasta  `unix_tests`    , baixe um arquivo com os nomes de todos os países do mundo utilizando o comando     [       curl:     ](https://linux.die.net/man/1/curl)  

```sh
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
```

1. ​      Mostre todo o conteúdo do arquivo  `countries.txt`       na tela.    

2. ​      Mostre o conteúdo de  `countries.txt`      , página por página, até encontrar a  `Zambia`      .    

3. ​      Mostre novamente o conteúdo de  `countries.txt`       página por página, mas agora utilize um comando para buscar por  `Zambia`      .    

4. ​      Busque por  `Brazil`       no  `countries.txt`      .    

5. ​      Busque novamente por  `brazil`      , mas agora utilizando o               *lower case*            .    

   ​                     **Para os próximos exercícios, crie um novo arquivo chamado  `phrases.txt`         e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.**          

6. ​      Busque pelas frases que não contenham a palavra  `fox`      .    

7. ​      Conte o número de palavras do arquivo  `phrases.txt`      .    

8. ​      Conte o número de linhas do arquivo  `phrases.txt`      .    

9. ​      Crie os arquivos  `empty.tbt`       e  `empty.pdf`      .    

10. ​      Liste todos os arquivos do diretório  `unix_tests`      .    

11. ​      Liste todos os arquivos que terminem com  `txt`      .    

12. ​      Liste todos os arquivos que terminem com  `tbt`       ou  `txt`      .    

13. ​      Acesse o manual do comando  `ls`      .    

# 1.4 Unix & Bash - Parte 2

Acessos e permissões: `ls -l`

```sh
Permissões | Links  | Proprietário | Grupo | Tamanho | Data e Hora   | Nome
  -----------|--------|--------------|-------|---------|---------------|---------
  drwxr-xr-x | 2      | root         | root  | 4096    | Out 19 09:10  | composer/
```

- ​              **Permissões**             => É possível verificar o tipo do item e nível de permissão para Leitura, Escrita e Execução de item ou diretório;    

- ​              **Links**             => Número de ligações que o item possui, no caso do diretório, número de subdiretórios que possui;    

- ​              **Proprietário**             => Quem é a pessoa dona, quem criou. É o diretório padrão da pessoa usuária, o home;    

- ​              **Grupo**             => Grupo ao qual pertence o item ou diretório. Utilizado para dar permissões à outras pessoas;    

- ​              **Tamanho**             => Em Bytes;    

- ​              **Data e Hora**             => Momento em que foi criado ou última modificação;    

- ​              **Nome**             => Nome do item ou diretório;    

  Você aprendeu no vídeo como alterar as permissões no modo literal  (caracteres), mas também é possível usar o modo octal. Para  compreendermos esta outra forma, precisamos entender que eles são  administrados por meio de valores como descrito abaixo:

- ​    Leitura           **r**         - 4  

- ​    Escrita           **w**         - 2  

- ​    Execução           **x**         - 1  

  Esses valores são permissões com base em bits de       **ligados = 1**     e       **desligados = 0**    ,

```
rwx = 111 ( 7 | Acesso Total )
r-- = 100 ( 4 | Somente Leitura )
-w- = 010 ( 2 | Somente Escrita )
--x = 001 ( 1 | Somente Execução )
rw- = 110 ( 6 | Somente Leitura e Escrita )
r-x = 101 ( 5 | Somente Leitura e Execução )
-wx = 011 ( 3 | Somente Escrita e Execução )
--- = 000 ( 0 | Todos Acessos Negados )
```

Portanto, cada vez que você liga a chave de leitura, atribui-se o valor  para esta chave somando-se com as demais chaves de administração de  escrita e execução caso você também deseje ligá-las. A sintaxe para  realizar esta alteração continua a mesma que no modo literal, sendo  `chmod 766 [arquivo ou diretório]`. 

```
comando > arquivo // redireciona a saída padrão para um arquivo
comando >> arquivo // adiciona a um arquivo
comando < arquivo // redireciona a entrada padrão de um arquivo
comando1 | comando2 // canaliza a saída do comando1 para a entrada do comando2
cat arquivo1 arquivo2 > arquivo0 concatena arquivo1 e arquivo2 em arquivo0
sort // ordena dados
who // lista direitos de acesso para todos os arquivos
chmod [options] arquivo // altera os diretos de acesso para o arquivo nomeado
comando & // executa o comando em segundo plano
^C // elimina o trabalho em execução em primeiro plano
^Z // suspende o trabalho em execução em primeiro plano
bg // retorna processos que estão suspensos
jobs // lista processos suspensos e em segundo plano
fg %1 // reinicia o primeiro processo suspenso
kill %1 // encerra o primeiro processo suspenso
ps // lista processos atuais
kill pid // encerra o processo pelo número pid
```

###   Parte I - Comandos de Input e Output

1. ​      Navegue até a pasta  `unix_tests`      ;    
2. ​      Crie um arquivo texto pelo terminal com o nome  `skills2.txt`       e adicione os valores  `Internet`      ,  `Unix`       e  `Bash`      , um em cada linha.    
3. ​      Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 🤓    
4. ​      Conte quantas linhas tem o arquivo  `skills2.txt`      .    
5. ​      Crie um arquivo chamado  `top_skills.txt`       usando o  `skills2.txt`      , contendo as 3 primeiras skills em ordem alfabética.    
6. ​      Crie um novo arquivo chamado  `phrases2.txt`       pelo terminal e adicione algumas frases de sua escolha.    
7. ​      Conte o número de linhas que contêm as letras  `br`      .    
8. ​      Conte o número de linhas que               **não**             contêm as letras  `br`      .    
9. ​      Adicione dois nomes de países ao final do arquivo  `phrases2.txt`      .    
10. ​      Crie um novo arquivo chamado  `bunch_of_things.txt`       com os conteúdos dos arquivos  `phrases2.txt`       e  `countries.txt`    
11. ​      Ordene o arquivo  `bunch_of_things.txt`      .    

###   Parte II - Permissões

1. ​      Navegue até a pasta  `unix_tests`      ;    

2. ​      Rode o comando       [         ls       ](https://linux.die.net/man/1/ls)        `-l`       e veja quais as permissões dos arquivos;    

3. ​      Mude a permissão do arquivo  `bunch_of_things.txt`       para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando  `ls -l`      ;    

   > ​        Resultado esperado:  `-rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt`      

4. ​      Tire a permissão de escrita do arquivo  `bunch_of_things.txt`       para todos os usuários, verifique se está correto com o comando  `ls -l`      ;    

   > ​        Resultado esperado:  `-r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt`      

5. ​      Volte à permissão do arquivo  `bunch_of_things.txt`       para a listada inicialmente utilizando o comando  `chmod 644 bunch_of_things.txt`      .    

   > ​        Resultado esperado:  `-rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt`      

###   Parte III - Processos & Jobs

1. ​      Liste todos os processos;    

2. ​      Agora use o comando       [         sleep       ](https://linux.die.net/man/3/sleep)        `30`      [          &        ](https://linuxhandbook.com/run-process-background/)      ;    

3. ​      Use a listagem de processos para encontrar o PID do processo que está executando o comando  `sleep 30`       e termine a sua execução       ~~        (mate o processo)      ~~      ;    

4. ​      Execute novamente o comando  `sleep 30`      , mas agora sem o  `&`      . Depois, faça com que ele continue executando em background;    

5. ​      Crie um processo em background que rode o comando  `sleep`       por 300 segundos.    

6. ​      Crie mais dois processos que rodem o comando  `sleep`       por 200 e 100 segundos, respectivamente.    

   > ​        Você deve criá-los em                   *foreground*                 (sem usar o  `&`        ) e suspendê-los (apertando  `ctrl+z`        ) após cada um começar a executar.      

7. ​      Verifique que apenas o processo  `sleep 300`       está em execução com o comando  `jobs`      . Suspenda a execução desse processo.    

   > ​        Você vai precisar trazer o processo para                   *foreground*                 ( `fg`        ) e suspendê-lo ( `ctrl+z`        ), ou enviar um sinal.      

8. ​      Retome a execução do processo  `sleep 100`       em background com o comando  `bg`      .    

9. ​      Termine a execução de todos os processos  `sleep`             ~~        (mate os processos)      ~~      .    



###   (Bônus) - Parte IV - O despertar do terminal

  E pra terminar com a energia   ~~    óh,  ~~   lá no alto, que tal aprender agora alguns comandos divertidos do Unix? ☝ 🎊

1. ​      Se você utiliza o               **Linux**            , abra o terminal e execute o comando  `sudo apt-get install cmatrix`      , ou para pessoas usuárias de               **macOS**            , utilize no terminal  `brew install cmatrix`      . Depois, execute o comando  `cmatrix`      . Quando estiver se sentindo como o               *Neo*            , aperte  `ctrl+c`       para voltar ao terminal;    
2. ​      No sistema               **Linux**            , execute o comando  `sudo apt-get install fortune`      , ou no               **macOS**              `brew install fortune`      , e após a instalação, crie um arquivo de texto chamado  `fortune.txt`       que contenha a sua sorte do dia. Utilize apenas uma linha de comando.               *Dica: use o comando  `fortune`        , e o operador  `>`        ;*          
3. ​      Conte quantas palavras tem a frase da sua sorte do dia.               *Dica: use o comando  `wc`        ;*          
4. ​      Execute o comando  `sudo apt-get install sl`       em um terminal               **Linux**            , ou  `brew install sl`       em um terminal               **macOS**            . Após a instalação, execute o comando  `sl`      . Agora tente  `sl -F`      ;    
5. ​      No sistema               **Linux**            , execute o comando  `sudo apt-get install cowsay`      , ou  `brew install cowsay`       no               **macOS**            . Após a instalação, execute o comando  `cowsay`       e algo que você queira falar. Agora faça a vaquinha dizer a frase que está gravada no arquivo  `fortune.txt`      ;    
6. ​      Descubra os fatores primos usando o comando  `factor`       e em seguida o número 42 ;    
7. ​      Veja como fica a sua sorte do dia ao contrário. Dica: utilize o comando  `rev`      .    
8. ​      Execute o comando  `telnet towel.blinkenlights.nl`       e espere alguns segundos. Lembre-se que você tem mais exercícios para fazer! 😅    