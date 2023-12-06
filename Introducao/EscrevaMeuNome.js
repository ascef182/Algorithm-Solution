function escrevaMeuNome(nome){
    return 'Meu nome é: ' + nome;
}

escrevaMeuNome('Pâmela');

function verificarIdade(idade){
    if(idade >= 18){
        console.log(escrevaMeuNome ('Vitor ') + 'Sou maior de idade')
    } else {
        console.log (escrevaMeuNome('Pamela ') + 'Sou menor de idade')
    }
}
verificarIdade(4);
verificarIdade(18);
