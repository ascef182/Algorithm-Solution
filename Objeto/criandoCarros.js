/*
    01- Cire uma classe para representar carros
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodado
    Crie um método que dado a quantidade de km e o preço do combustivel nos de o valor gasto em reais paara realizar este percurso
    
*/

class Carro{

    marca;
    cor;
    consumoPorKm;

    constructor(marca, cor, consumoPorKm, distancia, volume, ){
        this.marca = marca;
        this.cor = cor;
        this.consumoPorKm = consumoPorKm;    
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.consumoPorKm * precoCombustivel
    }

}

    const uno = new Carro('Fiat', 'Prata', 1 / 12);
    console.log(uno.calcularGastoDePercurso(70, 5));
    const palio = new Carro('Fiat', 'Preto', 1 / 10);
    console.log(palio.calcularGastoDePercurso(70, 5));
