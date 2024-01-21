
/*====================================*/
/*Constantes e variáveis*/

const INPUT = [ 2000, 250] //O primeiro valor é a renda, o segundo são os benefícios no pagamento

let i = 0; //contador

/*====================================*/
/* Funções */

/* Simula a entrada de dados no programa*/

function gets()
{
    let saveIndez = i;
    i++;

    return INPUT[saveIndez];
}

/*Informa a saída no console*/

function print(text)
{
    console.log(text);
}

/*====================================*/
/* exportar */

module.exports = { gets, print};