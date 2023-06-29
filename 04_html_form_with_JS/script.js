function boasVindas() {
  const email = document.getElementById('email');
  const senha = document.getElementById('senha');

  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

const evento = document.getElementById('botao');
evento.addEventListener('click', boasVindas);

const botao = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');

function ativarBotao() {
  if (checkbox.checked === true) {
    botao.removeAttribute('disabled');
  }
}
checkbox.addEventListener('click', ativarBotao);
