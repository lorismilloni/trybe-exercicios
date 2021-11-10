let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  bemVindo = 'Bem-vinda, ' + info.personagem;
  console.log(bemVindo);

  info.recorrente = 'Sim';

  console.log(info);

for(let key in info) {
    console.log('informações da personagem ', key)
}

for(let key in info) {
    console.log('informações ', info[key])
}