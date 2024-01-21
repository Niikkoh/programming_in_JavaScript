
/*=====================================*/
/*Constantes e variaveis*/

const LIST_NUMBERS = [5, 3, 4, 1, 10, 8];

let i = 0;

/*=====================================*/
/*Funções*/

/*Simula uma entrada de dados*/

function gets()
{

    let saveIndex = i;
    i++;

    return LIST_NUMBERS[saveIndex];
}

/*Saída de dados pelo console*/

function print(text)
{
    console.log(text);
}

/*=====================================*/
/*Exportação*/

module.exports = { gets, print};