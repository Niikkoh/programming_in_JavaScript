
 /* Crie uma classe para representar pessoas.
 
    Para cada pessoa teremos os atributos nome, peso e altura.

    As pessoas devem ter a capacidade de dizer o valor do seu IMC = peso / (altura * altura);

    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o
    valor do seu IMC.
*/

/*================================*/
/*Constantes*/

const NAME_PERSON = 'José';
const WEIGHT_PERSON = 75;
const HEIGHT_PERSON = 1.75;

const MAX_TO_LOW_WEIGHT = 18.5;
const MAX_TO_HEALTHY_WEIGHT = 25;
const MAX_TO_OVERWEIGHT = 30;
const MAX_TO_OBESE = 40;

/*================================*/
/*Classe pessoa*/

class person {

    constructor(name, weight, height){

        this.name = name; //Nome
        this.weight = weight; //Peso
        this.height = height; //Altura
        this.imc = this.calcIMC() //IMC
    }

    /* Calcula o IMC da pessoa */
    calcIMC () { return this.weight / Math.pow(this.height, 2); }

    /* Mostra o IMC no console */
    showIMC (){

        console.log(`${this.name} tem o total de ${this.imc.toFixed(2)} IMC.`);
        console.log(`${this.classifyIMC()}`);
    }


    /* Enquadra o perfil de saúde do usuário de acordo com o IMC*/
    classifyIMC (){

        if(this.imc < MAX_TO_LOW_WEIGHT)
            return 'Abaixo do peso';
        else if(this.imc  < MAX_TO_HEALTHY_WEIGHT)
            return 'Peso Normal';
        else if(this.imc  < MAX_TO_OVERWEIGHT)
            return 'Acima do peso';
        else if(this.imc  < MAX_TO_OBESE)
            return 'Obeso';
        else
            return 'Obesidade grave';
    }
}

/*================================*/
/*Função main*/

(function () {

    let jose = new person(NAME_PERSON, WEIGHT_PERSON, HEIGHT_PERSON); //Instância o objeto Jose

    jose.showIMC(); // Mostra o IMC do José

})()

/*================================*/