
    /*

    Faça um programa que receba a quantidade de números e seus respectivos valores. 
    Imprima o maior e o menor número deste conjunto.

    Exemplo:
    
      Entrada:
        4
        100
        150
        90
        200

      Saída:
        Maior número: 200
        Menor número: 90    

    */

/*==========================*/
/*Importação*/

const {gets, print} = require ('./essential_functions');

/*==========================*/
/*Função main*/

(function(){

    let max = gets(); //Coleta o tamanho do vetor
    
    // Coleta o primeiro elemento do vetor
    let lowerNumber = gets(); 
    let higherNumber = lowerNumber;

    let number; //Para salvar os próximos números da entrada

    /*Percorre o restante do vetor e compara com os números
      menores e maiores registrados até o momento*/

    for(let i= 1; i < max; i++)
    {
        number = gets();

        if(lowerNumber > number)
        {
            lowerNumber = number;
        }
        else if(higherNumber < number)
            higherNumber = number;
    }

    /*Printa o resultado*/
    
    print(`maior número: ${higherNumber}`);
    print(`menor número: ${lowerNumber}`);

})()