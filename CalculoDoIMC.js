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
function calcularImc(peso, altura){
    return peso / Math.pow(altura, 2);
}
//Math.pow(altura, 2) potencia, biblioteca para potencia

function classificarImc(imc){
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
(function (){
const peso = 65;
const altura = 1.65;

const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
 })();

    
