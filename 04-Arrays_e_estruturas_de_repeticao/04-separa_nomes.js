
  /*

    Faça um programa que dado uma lista de nomes imprima os nomes que começam com a letra "v"

  */


/*=================================*/
/*Constantes*/

const LIST_NAMES = [ 'Nicolas', 'Vitor', 'Vitoria'];

/*=================================*/
/*Função Main*/

( function(){

    showListNames(returnListNamesWithV(LIST_NAMES));

})()

/*=================================*/
/*Funções*/

/*Essa função separa os nomes que iniciam com a letra V*/

function returnListNamesWithV (listName)
{
    let listNameWithV = []; // Cria uma lista vazia

    for( let i=0; i < listName.length; i++) //Percorre a lista toda
    {
        if(listName[i][0] == 'v' || listName[i][0] == 'V') // Caso tenha a letra v no começo do nome, é adicionado na nova lista
            listNameWithV.push(listName[i]);

    }
    
    return listNameWithV;
}

/*Mostra uma lista de nomes no console*/

function showListNames (listName)
{

    for( let i=0; i < listName.length; i++) //Printa cada elemento da lista
    {
        console.log(listName[i]);
    }
}