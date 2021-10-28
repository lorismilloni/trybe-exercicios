[toc]

# BLOCO 2

# 2.1 - Git, GitHub e Internet

- O que é o **Git**?    
- Qual a principal diferença para os outros `VCS's`?    
- Como configurar o **Git** na sua máquina? 
- Como iniciar um repositório local?    
- O que é o ***GitHub***?    
- Como subir seu repositório local para o ***GitHub***?    
- O que é *Branch*, *Merge*, *Commit*?    

1. Instalar e configurar o ***Git*** no seu computador;    
2. Salvar seus projetos no repositório ***Git*** local;    
3. Controlar as alterações e versões dos seus arquivos;    
4. Enviar seus projetos para o repositório remoto do ***GitHub***.    

O git é um mecanismo de controle de versão distribuído. Guarda um conjunto de alterações através dos commits.

O github é plataforma que hospeda repositórios do Git.

Três conceitos importantíssimos para o seu trabalho:

- Ramificação (Branching);    
- Mesclagem (Merge);    
- Resolução de conflitos.

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

## Recapitulando

Agora você já pode esquecer que um dia versionou os arquivos adicionando o nome da versão no final!

- O Git é um sistema de versionamento distribuído (DVCS);    

- A maior vantagem do **Git** é que ele é distribuído, ou seja, o repositório fica na sua máquina e você não precisa se preocupar em fazer               *"lock"* de arquivos assim como em outros *VCS's*;    

- Vimos que a instalação do **Git** e sua configuração são simples. Basta baixar o instalador e configurá-lo usando o comando `git config`;    

- Para iniciar um repositório local, vimos que você tem duas opções:    

  - `git init` *(para criar um novo repositório **Git**)*;      
  - `git clone` *(para copiar um repositório **Git** existente para sua máquina e, assim, poder criar branches e Pull Requests)*.      

- O GitHub é uma plataforma de hospedagem de código-fonte com controle de versão usando o Git;    

- Você pode:

  1. Criar um repositório do zero localmente, na sua máquina, onde utilizará o comando `git init`;      
  2. Trabalhar num repositório já existente, onde utilizará o comando  `git clone`;      

  Esses dois comandos são *excludentes*, ou seja, você usa um, ou usa o outro, *nunca* os dois ao mesmo tempo. Após isso, siga um dos dois fluxos abaixo.         

- **Fluxo 1** - Após `git init`:    

  1. Criar seu primeiro `commit` ;      
  2. Criar o repositório remoto na sua conta do **GitHub**;      
  3. Adicionar a *URL* do repositório remoto;      
  4. Executar o famoso `push` .      

- **Fluxo 2** - Após `git clone`:    

  1. Criar sua branch dentro do repositório clonado;      
  2. Fazer checkout na sua branch;      
  3. Criar seu primeiro `commit` ;      
  4. Executar o famoso `push` .      

# 2.3 - Internet

IP: cpf de cada máquina, apelidos de ip =  nomes de domínio, dns, domain name system.

- Explicar de forma simples como a internet funciona;    
- Entender o modelo Cliente & Servidor e identificar suas partes;    
- Compreender como funcionam os protocolos HTTP e HTTPS;    
- Identificar quais os tipos de requisição podem ser feitos através desses protocolos.

Quando você for pensar no design de uma aplicação web, por exemplo, terá que considerar fatores como a latência da rede, a geolocalização dos  servidores, a velocidade e/ou disponibilidade de conexão dos usuários.

## Definições

- Cliente: Firefox, Mozilla, Chrome... qual o navegador você utilizou para fazer a sua pesquisa? O termo técnico para ele é **cliente**. O cliente é uma aplicação que está conectada à Internet. A sua  principal função é receber a interação do usuário e traduzi-la em uma  requisição para outro computador chamado Servidor Web. Apesar de usarmos o navegador para acessar à Internet, você pode pensar no seu computador como sendo o Cliente no modelo Cliente-Servidor. Todo computador tem um número único, como o seu CPF, chamado endereço IP. É através desse  endereço que computadores, celulares e tablets são identificados.    

- Servidor: Como vimos no exemplo acima, nossa busca por *www.google.com* será enviada para um **Servidor**. O Servidor é um super computador conectado à Internet. Ele  também tem o seu próprio endereço IP, assim como o seu computador. O Servidor espera por requisições de outras máquinas (clientes). Diferente do seu computador, um Servidor tem um software específico em execução  que irá dizer como ele deve responder a uma requisição do seu navegador. A principal função do Servidor é **armazenar, processar e entregar**             páginas web para os Clientes. Há diversos tipos de servidores, como *Web Servers, Database Servers, File Servers, Application Servers*            . O servidor que usamos para fazer a busca por  *www.google.com* é um *Web Server*. 

- Endereço IP: A sigla IP refere-se a *Internet Protocol*. O endereço IP é um identificador numérico para um dispositivo (computador, celular, tablet, impressora, roteador, servidor...) conectado à rede TCP/IP. Todo dispositivo conectado à Internet tem um endereço IP **único** que irá identificá-lo, e será usado para comunicar com outros dispositivos. Os endereços IP tem quatro campos de dígitos separados por pontos (exemplo: 244.155.65.2). Esses números são chamados de endereço lógico. Para localizar um dispositivo conectado à Internet o endereço  lógico é convertido em um endereço físico por um software. Esse endereço físico faz parte do seu *hardware* e é conhecido por endereço de controle de acesso à mídia (MAC address).

- TCP/IP: Essa sigla refere-se à *Transmission Control Protocol/Internet Protocol*. Um protocolo é um conjunto de regras, e o protocolo TCP/IP é  utilizado para transmitir dados na rede. Ele também é o protocolo de  comunicação mais utilizado no mundo Web.    
- ISP: ISP ou *Internet Service Provider* é o seu provedor de Internet. É qualquer empresa que nos fornece  acesso ao maravilhoso mundo Web. Sem os seus serviços, não  conseguiríamos fazer a nossa busca por *www.google.com* pois não estaríamos conectados à Internet.    
- DNS: DNS ou *Domain Name System* é um dispositivo com uma base de dados distribuída que gerencia os nomes de serviços, computadores ou qualquer dispositivo conectado à Internet. Ele é usado para relacionar o endereço nominal (google.com)  com o endereço IP. Os servidores DNS são responsáveis por localizar e  traduzir para números (um endereço IP) as buscas por sites que digitamos no navegador.    
- Port Number: O número de porta é um número de 16 bits utilizado para identificar uma porta específica no servidor, e está sempre  associado ao endereço IP. O *Port number* é uma forma de identificar um processo específico encaminhado para o servidor.    
- Host: O *Host* é qualquer computador conectado à rede, seja como cliente,  servidor ou qualquer outro tipo de dispositivo. Cada host tem um  endereço IP único. Para o site que estamos buscando, *www.google.com*, o host é o servidor web que hospeda a página na web. É comum  confundir o host com o servidor. Lembre-se que eles são coisas diferentes! O Servidor é um tipo de host - uma máquina específica com  endereço IP. Por outro lado, o host pode ser também uma organização inteira que fornece um serviço de hospedagem para manter inúmeros  servidores web.    
- HTTP: *Hyper-text Transfer Protocol* é o protocolo utilizado para a comunicação entre navegadores e servidores na Internet.    
- URL: O URL é a sigla para *Uniform Resource Locators* e identifica um recurso web específico. Podemos, como exemplo, mudar a nossa busca para *[https://www.google.com/travel/flights](https://www.google.com/travel/flights)* para pesquisar por preços de passagens aéreas. O URL identifica o protocolo que será utilizado para comunicarmos com o servidor (https), o nome do host (google.com) e o recurso que queremos acessar (travel/flights).

Aplicações web seguem uma estrutura básica muito similar. Elas são compostas por um cliente, um servidor e uma base de dados.

O cliente é responsável por interagir com o usuário. Em uma aplicação Web o cliente é responsável por definir a **estrutura**, a **aparência** e mecanismos para lidar com as **interações do usuário** (como um click, ou um campo para preenchimento).

## Estrutura

A **estrutura** da sua página é definida por uma linguagem chamada HTML, que é a sigla para *Hyper text markup language*. O HTML te permite configurar a estrutura física da sua página web. Cada tag do HTML descreve um elemento específico do documento, como podemos ver abaixo:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <header>
    <h1>Minha página Web!</h1>
  </header>
  <p>Bem vindos! Essa é a estrutura básica da minha primeira página</p>
  <ul>O que estou aprendendo:
    <li>Git & GitHub</li>
    <li>Internet</li>
    <li>Shell</li>
  </ul>
</body>
</html>
```

A **aparência** da página é definida por uma outra linguagem chamada CSS, que significa *Cascading Style Sheets*. O CSS é uma linguagem que te permite descrever como os elementos definidos pelo HTML devem ser estilizados. O CSS te permite alterar a fonte, a cor, o tamanho e até mesmo incluir recursos como animações e áudio. Você pode adicionar um estilo para a sua página como no exemplo:

```css
body {
  background-color: blue;
}

h1 {
  color: purple;
  font-size: large;
}

p {
  color: green;
  font-weight: bold;
}

h2 {
  color: red;
  border: 3px solid black;
}
```

As **interações com o usuário** são definidas por uma terceira linguagem: o JavaScript. É o JavaScript que confere à página um comportamento dinâmico. Imagine que você esteja em uma página de e-commerce. Você pode clicar nos items que  quer comprar e salvá-los em um carrinho, você pode adicionar filtros nas suas buscas, navegar entre as sessões do site, tudo isso graças ao Javascript! Você deve estar se perguntando: Beleza, eu consigo visualizar tudo o que está acontecendo no momento que faço as compras na loja online. Mas para onde vai o meu pedido no momento em que efetuo o pagamento? O que acontece por trás dos bastidores de um e-commerce?

```javascript
// Limpar o leitor com um click duplo
const clearButton = document.querySelector('.limpar');
clearButton.addEventListener('dblclick', function () {
  inputResultado.value = "";
});
```

O **servidor** em uma aplicação Web é quem recebe as requisições do cliente. Lembra-se do protocolo HTTP? Pois bem, é aqui que ele entra em cena. É esse protocolo que define uma linguagem para que clientes e servidores se comuniquem. O servidor espera por requisições HTTP de uma porta  específica, sempre associada a um endereço IP. Com as requisições, ele vai realizar ações e enviar a resposta via HTTP. Todos os dados que  viajam entre o cliente e o servidor são enviados através da rede  Internet usando o protocolo TCP/IP.

E por fim, o **banco de dados** de uma aplicação web é onde a informação é armazenada de forma acessível, gerenciável e em constante atualização.

Agora, vamos entender como escalonar uma aplicação web. Uma forma para lidarmos com um grande volume de dados é distribuir o tráfego de  informações entre servidores no backend. O responsável por gerenciar o trânsito de informações de uma aplicação entre vários servidores backend é o que chamamos de balanceador de carga.

"Balanceamento de carga" é um termo genérico para uma série de algoritmos que distribuem as requisições para o servidor. Caso você  tenha curiosidade em conhecer alguns desses algoritmos, pesquise por  dois que são muito populares no design de sistemas distribuídos: **Round  Robin** e **Least Connections**. Resumidamente, através de algoritmos o  balanceador de cargas divide para qual host as requisições serão  direcionadas em um sistema de serviços distribuídos.

Um serviço é apenas outro servidor capaz de interagir com servidores, o  que não acontece com um servidor Web, que interage apenas com o cliente. Cada serviço tem uma funcionalidade, como um serviço para autenticação  de usuário ou serviços de busca. Assim, é possível quebrar o servidor  Web da sua aplicação em múltiplos serviços, cada um com uma funcionalidade específica. A grande vantagem dos serviços é que você  pode escaloná-los de forma independente. Além disso, os times de uma empresa também podem trabalhar de forma independente em um determinado  serviço, ao invés de ter uma equipe numerosa trabalhando em um único  servidor, o que poderia se tornar um grande problema de gestão de  projeto.

Tudo o que vimos até agora funciona muito bem para escalonar o tráfego de dados. Mas a sua aplicação ainda está centralizada em um único lugar. Quando usuários do mundo todo começarem a acessar o seu site, eles  podem ter um tempo de resposta maior devido à grande distância entre  cliente e servidor. Uma forma de resolvermos esse problema é usando o  que chamamos de Rede de Distribuição de Conteúdo, ou Content Delivery Network (CDN). O CDN é um sistema de distribuição de servidores "proxy". Podemos  entender um servidor proxy como sendo um intermediário entre cliente e  servidor.

## O protocolo HTTP

TCP/IP e HTTP protocolo de transferência de hipertexto

O Cliente envia uma requisição ao Servidor, que irá lhe retornar uma resposta. Com o grande volume de dados envolvidos nessa operação,  gerenciar essas mensagens não é uma tarefa fácil. Assim, Cliente e Servidor aderem a uma linguagem comum, com regras que alinham as  expectativas de ambas as partes, de forma que eles sabem exatamente o  que esperar. Essa linguagem é o que chamamos de protocolo HTTP.

Cada requisição e resposta trocada entre Cliente e Servidor é uma única transação HTTP. O HTTP é uma linguagem de texto, o que significa que as  mensagens trocadas são quantificadas em bits. Cada mensagem é dividida  em duas partes: o *header*  e o *body* .

É importante ter em mente que o HTTP por si só não consegue transmitir dados. Ele ainda depende do protocolo TCP/IP para pegar as requisições e respostas entre duas máquinas. O HTTP é uma camada de abstração que padroniza a forma com que os hosts se comunicam. Para adicionar mais essa camada de segurança, o HTTPS utiliza um segundo mecanismo de segurança: o SSL.

### Métodos HTTP

#### Get

O método GET é o mais comum, e é utilizado para ler informações  encaminhadas pelo servidor para uma URL específica. As requisições GET  são apenas para **leitura**, o que significa que os dados nunca poderão ser modificados no  servidor. O servidor irá apenas retornar os dados, sem modificá-los. Assim, esse tipo de requisição é considerada uma operação segura, pois o efeito retornado será sempre o mesmo, independentemente do número de  requisições feitas. Assim sendo, dizemos que requisições GET são **idempotentes**, o que significa que o efeito da requisição no servidor será sempre o mesmo - fazer milhões de requisições GET para o mesmo URL tem o mesmo efeito que uma única requisição. O método GET apenas retorna dados. Requisições GET são respondidas com status 200 (OK) se o recurso que estamos querendo acessar for encontrado com sucesso, ou 404 (NOT FOUND) se a página não for encontrada.

#### Post

O método POST é utilizado para criar um novo recurso, como um formulário para login. Você usará o método POST para criar um recurso  subordinado (ex: novo usuário) para a aplicação pai (ex: [http://exemplo.com/usuario).](http://exemplo.com/usuario).) Ao contrário do método GET, o método POST não é nem seguro e nem idempotente. Fazer duas ou mais requisições POSTS resultará em novos recursos criados (mesmo que idênticos). Requisições POST são retornadas  com o status code 201 (CREATED) e um novo caminho no header com o Link  do recurso criado.

#### Put

O método PUT é utilizado para atualizar o recurso identificado pelo URL. Esse método também pode ser utilizado para criar um novo recurso.  Requisições PUT não são consideradas operações seguras, pois o estado da aplicação é modificado no servidor. No entanto, o método PUT é  idempotente porque múltiplas requisições PUT para atualizar um recurso têm o mesmo efeito que uma única requisição. A resposta a requisição é o status code 200 (OK) se o recurso foi atualizado com sucesso, ou 404 (NOT FOUND) se ele não for encontrado.

#### Delete

DELETE é utilizado para deletar um recurso identificado pelo URL. As requisições DELETE são idempotentes, pois quando deletamos um recurso  ele será deletado. Você pode fazer milhares de requisições com o método DELETE que no fim o resultado será o mesmo: um recurso deletado. A resposta requisição é o status code 200 (OK) se o recurso for  deletado com sucesso, ou 404 (NOT FOUND) se o recurso que será deletado  não existir.

#### Rest

Você pode já ter ouvido falar do termo **RESTful** para descrever uma aplicação. REST é a sigla para *Representational State Transfer*. É um estilo de arquitetura utilizado no design de aplicações Web. O estado da aplicação são os dados necessários para que o servidor possa atender a uma determinada requisição. As regras do REST nos guiam a desenvolver sistemas mais performáticos, escaláveis, simples, de fácil manutenção e modificação, portátil e confiável.

## curl

`curl` um comando disponível na maioria dos sistemas baseados em Unix que serve para verificar conectividade, além transferir dados via terminal.

```bash
curl --version
-u ou --user : Permite especificar nome de usuário e senha para autenticação no servidor.
-T ou --upload-file : Permite transferir arquivos locais para uma URL remota.
-s ou --silent : Coloca o curl em modo silencioso. Este comando fará com que mensagens de erro e status de progressão não gerem nenhum tipo de notificação. 
curl -O url // requisição de download
curl -O trybe_logo.png url // opção de requisição que renomeia o arquivo
```

