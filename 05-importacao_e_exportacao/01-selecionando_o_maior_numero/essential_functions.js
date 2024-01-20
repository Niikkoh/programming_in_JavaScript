

/* Função recebe um vetor de numeros e retorna o maior*/

function searchHigherNumber (numberArray)
{
    let higherNumber = numberArray[0];
 
    for(let i = 1; i < numberArray.length; i++)
    {
        if(numberArray[i] > higherNumber)
        {
            higherNumber = numberArray[i];
        }
    }

    return higherNumber;
}

/* Função que mostra no console o resultado do processamento*/

function print(text)
{
    console.log(text);
}

/*======================================*/
/* Exporta as funções do documento */

module.exports = { searchHigherNumber, print};