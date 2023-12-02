/*
O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa  adulta
Fórmula do IMC:
IMC = peso / (altura * altura) seria ao quadrado

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo

IMC em adultos Condição:
-Abaixo de 18.5, abaixo do peso;
-entre 18.5 e 25, peso normal;
-Entre 25 e 30, acima do peso;
-Entre 30 e 40, obeso;
-Acima de 40, obesidade grave
*/

const peso = 150;
const altura = 1.65;
const imc = peso / Math.pow(altura, 2);
//Math.pow(altura, 2) potencia, biblioteca para potencia
console.log(imc);

if(imc < 18.5){
    console.log("Você está abaixo do peso");
} else if(imc >= 18.5 && imc < 25){
    console.log("Você tem um peso normal");
}else if(imc >= 25 && imc < 30){
    console.log("Você está acima do peso");
}else if(imc >= 30 && imc < 40){
    console.log("Você está obeso");
} else{
    console.log("Você está com obesidade grave");
}
