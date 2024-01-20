
/*===========================================*/
/*constantes e variaveis*/

const ALL_NUMBERS = [ 5, 1, 3, 9, 10, 12];

let i = 0;

/*===========================================*/
/*funções*/

/*Informa o próximo elemento do vetor*/
function gets()
{
    i++;
    return ALL_NUMBERS[i-1];
}

/*Printa no console o texto*/
function print(text)
{
    console.log(text);
}

/*===========================================*/
/*exporta*/

module.exports = {gets, print};