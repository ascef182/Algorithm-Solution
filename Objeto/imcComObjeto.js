/*
    2) Crie uma classe para representar pessoas;
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidde de dizer o valor do seu IMC = peso / (altura * altura);
    Instancnie uma pessoa chamada José que tenha 35kg peso e 1.75 altura e peça José para dizer o valor do seu IMC;
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome,peso,altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    imc() {
        return this.peso / (this.altura * this.altura);
    }
    classificarImc(){
     const imc = this.imc();
     if(imc < 18.5){
        return ("Você está abaixo do peso");
    } else if(imc >= 18.5 && imc < 25){
        return ("Você tem um peso normal");
    }else if(imc >= 25 && imc < 30){
        return ("Você está acima do peso");
    }else if(imc >= 30 && imc < 40){
        return ("Você está obeso");
    } else{
        return ("Você está com obesidade grave");
    }
    }
}
//invocou o método imc()
const jose = new Pessoa('José', 75, 1.75);
console.log(jose.classificarImc());
const renan = new Pessoa('Renan', 85, 1.65);
console.log(renan.classificarImc());