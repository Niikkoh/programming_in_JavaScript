
/* Crie uma classe para representar carros.
   
Os carros possuem uma marca, uma cor e um gasto médio de combustível por kilômetro rodado.

Crie um método que dado a quantidade de quilômetros e o preço do combustível nos de o valor
gasto em reais para realizar este percurso.*/


/*================================*/
/*Constantes*/

const CAR_NAME_1 = 'Fiat';
const CAR_COLOR_1 = 'Vermelho';
const CAR_FUEL_PER_KM_1 = 0.35;

const TRIP_KM = 100;
const FUEL_PRICE = 5.79;

/*================================*/
/*Classe carro*/

class Car{

    constructor(name, color, fuelForKM){
       
        this.name = name; // Marca do carro
        this.color = color; // Cor do carro
        this.fuelForKM = fuelForKM; // Gasto médio de combustível por kilômetro

    }

    /* Calcula o preço do combustível */
    calcFuelCost (distanceKM, fuelPrice){ return this.fuelForKM * distanceKM * fuelPrice; }

    /* Mostra o gasto do combustível no console*/
    showFuelCost (distanceKM, fuelPrice){

        console.log(`O ${this.name} da cor ${this.color} tem um custo de R$${this.calcFuelCost(distanceKM, fuelPrice).toFixed(2)} nessa viagem`);

    }
}

/*================================*/
/*Classe principal*/

(function (){

    let nicolasCar = new Car(CAR_NAME_1, CAR_COLOR_1, CAR_FUEL_PER_KM_1); // instância objeto

    nicolasCar.showFuelCost(TRIP_KM, FUEL_PRICE); // Mostra o custo da viagem com o objeto do carro

})()