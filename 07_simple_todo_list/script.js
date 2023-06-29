// cria elemento
//
//
//

const cria = document.getElementById('criar-tarefa');
const tarefa = document.getElementById('texto-tarefa');
const lista = document.getElementById('lista-tarefas');

function criaElemento () {
  const elemento = document.createElement('li');
  elemento.className = 'itemLista';
  elemento.innerText = tarefa.value;
  // let texto = tarefa.value;
  // elemento.appendChild(document.createTextNode(texto));
  lista.appendChild(elemento);
  tarefa.value = '';
}

cria.addEventListener('click', criaElemento);

// muda a cor
//
//
//

// const listItem = document.getElementsByClassName('itemLista');

function mudaCor (event) {
  const selecionaItem = document.querySelector('.selected');

  if (selecionaItem !== null) {
    selecionaItem.classList.remove('selected');
    event.target.classList.add('selected');
  } else {
    event.target.classList.add('selected'); // add a classe
  }

  /* if (document.querySelector(".selected")) {
    document.querySelector(".selected").classList.remove("selected");
  }
  evento.target.classList.add("selected"); */

  // muda.style.backgroundColor = 'rgb(128, 128, 128)';
}

lista.addEventListener('click', mudaCor);

// risca os itens
//
//
//

function risca (event) {
  // console.log(event.target);

  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

lista.addEventListener('dblclick', risca);

// apaga tudo
//
//
//

const botaoApagar = document.getElementById('apaga-tudo');

function apagar() {
  // console.log('vai funcionar');
  const remove = document.querySelectorAll('.itemLista');
  /* remove.forEach(function(key) {
      key.remove()
    }) */
  remove.forEach((key) => key.remove());
}

botaoApagar.addEventListener('click', apagar);

// remove os riscados
//
//
//

const botaoRemover = document.getElementById('remover-finalizados');

function remover () {
  console.log('será');
  const removeFin = document.querySelectorAll('.completed');
  removeFin.forEach((key) => key.remove());
}

botaoRemover.addEventListener('click', remover);
