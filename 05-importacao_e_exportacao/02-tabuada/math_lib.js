

/*============================================*/
/*Constantes*/

const MAX_N = 10;


/*============================================*/
/*Mostra a tabuada toda no console*/

function showMultiplicationTable (number)
{
    for( let i=1; i < MAX_N; i++)
    {
        console.log(`${number}x${i} = ${number * i}`);
    }
}   

/*============================================*/
/*Exporta*/

module.exports = {showMultiplicationTable};