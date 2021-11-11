let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

let bemVindo = 'Bem-vinda, ' + info.personagem;

info.recorrente = 'Sim';

/* for(let key in info) {
    console.log(info[key], 'e ')
}; */

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

/* for(let key in info2) {
    console.log(info2[key])
}; */

/* for(let chave1 in info) {
    for(let chave2 in info2) {
        console.log(info[chave1], 'e ', info2[chave2])
        
        if(chave2 == 'recorrente') {
            break;
        }
    };

    if(chave1 == 'recorrente') {
        break;
    }
}; */

for(let key in info) {
        console.log(info[key], 'e ', info2[key])

        if(key == 'recorrente') {
            break;
        }
}