
    /*Crie um programa que dado um número imprima a sua tabuada*/

/*================================*/
/*Constantes*/

const NUMBER = 9;
const N_TABLE_MAX = 10;

/*================================*/
/*Main*/

(function (){

    showMultiplicationTable (NUMBER);

})()

/*================================*/
/*Funções*/


/*Mostra a tabuada no console*/

function showMultiplicationTable (number)
{
    for(let i = 1; i <= N_TABLE_MAX; i++){
        console.log(`${number} * ${i} = ${number * i}`);
    }
}