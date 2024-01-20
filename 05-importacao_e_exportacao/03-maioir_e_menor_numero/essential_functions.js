
/*============================*/
/*Constantes e variáveis*/

const NUMBER_ARRAY = [4, 100, 150, 90, 200]; //Primeiro dígito representa a quantidade de elementos do vetor

let i = 0;

/*============================*/
/*Funções*/

function gets()
{
    i++;
    return NUMBER_ARRAY[i-1];
}

function print(text)
{
    console.log(text);
}

/*============================*/
/*Exportação*/

module.exports = {gets, print};