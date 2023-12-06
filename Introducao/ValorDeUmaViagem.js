// Programa para calcular valor de uma viagem

// 3 variáveis, sendo elas:
// 1 - Preço de combustível
// 2 - Gasto médio do carro por KM
// 3 - Distância em Km de viagem

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const KmPorLitros = 10;
const distanciaPercorrida = 650;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaPercorrida / KmPorLitros;

if(tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
        console.log(valorGasto.toFixed(2)); 
    } else{
        const valorGasto = litrosConsumidos * precoGasolina;
        console.log(valorGasto.toFixed(2)); 
    }