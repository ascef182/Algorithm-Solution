//instancia é a ocorrencia da pessoa, descrição
const pessoa = {
    nome: 'Vitor',
    idade: 25,
    
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
};
 
console.log(pessoa['nome']);

pessoa['nome'] = 'teste';
pessoa.nome = 'teste';