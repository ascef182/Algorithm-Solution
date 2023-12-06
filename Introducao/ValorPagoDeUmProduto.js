/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado

Código Condição de pagamento:
-À vista Débito, recebe 10% de desconto;
-À vista no dinheiro ou PIX, recebe 15% de desconto;
-Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes,preço normal de etiqueta mais juros de 10%;
*/

const precoEtiqueta = 10;
const formaDePagamento ='MaisVezes'


const precoDebito = precoEtiqueta * 0.9;
const precoDinheiroOuPix = precoEtiqueta * 0.85;
const parcelaDuasVezes = precoEtiqueta;
const parceladoMaisVezes = precoEtiqueta * 1.1;

if(formaDePagamento === 'Débito'){
    console.log(precoDebito);
}else if(formaDePagamento === 'DinheiroPix'){
    console.log(precoDinheiroOuPix);
} else if (formaDePagamento === 'DuasVezes'){
    console.log(parcelaDuasVezes);
} else{
    console.log(parceladoMaisVezes);
}