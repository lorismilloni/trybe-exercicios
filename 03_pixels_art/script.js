document.getElementById('black').style.backgroundColor = 'black';
document.getElementById('red').style.backgroundColor = 'red';
document.getElementById('green')
  .style.backgroundColor = 'green';
document.getElementById('blue').style.backgroundColor = 'blue';

for (let index = 0; index < 5; index += 1) {
  const linha = document.createElement('div');
  linha.className = 'line';
  for (let colunas = 0; colunas < 5; colunas += 1) {
    const board = document.getElementById('pixel-board');
    const div = document.createElement('div');
    div.className = 'pixel';
    linha.appendChild(div);
    board.appendChild(linha);
  }
}

const paleta = document.getElementById('color-palette');
const quadradinhos = document.getElementsByClassName('color');

function clicando(event) {
  for (const key of quadradinhos) {
    key.classList.remove('selected');
  }
  event.target.classList.add('selected');
}

paleta.addEventListener('click', clicando);

const quadrado = document.querySelector('#pixel-board');

function colorir(event) {
  let cor = document.querySelector('.selected');
  let corPixel = cor.style.backgroundColor;
  event.target.style.backgroundColor = corPixel;
}

quadrado.addEventListener('click', colorir);

const btn = document.getElementById('clear-board');

function limpar(event) {
  /* let quadr = document.querySelector('#pixel-board');
  let remove = quadr.remove();
  key.classList.remove(c) */
  const pixels = document.getElementsByClassName('pixel');
  console.log(pixels);
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = '';
  }
}

btn.addEventListener('click', limpar);

window.onload = function () {
  /* document.querySelectorAll('color')[0].classList.add('selected'); */
  quadradinhos[0].classList.add('selected');
};
