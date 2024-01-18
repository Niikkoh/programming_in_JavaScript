
 /* Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par
    encontrado. */

/*================================*/
/*Constantes*/

const ARRAW_NUMBERS = [ 2, 3, 5, 4, 0];

/*================================*/
/*Main*/

(function (){

    showPairNumbers(ARRAW_NUMBERS);

})()

/*================================*/
/* Mostra no console todos os números pares duma lista*/

function showPairNumbers (arrawNumbers){

    for(let i = 0; i < arrawNumbers.length; i++){

        if(arrawNumbers[i] % 2 === 0)
            console.log(`${arrawNumbers[i]}`);
    }
}