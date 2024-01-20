
    /*

    Faça um programa que receba a quantidade de números e seus respectivos valores.
    Imprima todos os números pares.
    
    Exemplo:
      Entrada:
        5
        1
        3
        9
        10
        12

      Saída:
        Números Pares: 10, 12

    */

/*===========================================*/
/*Importação*/

const {gets, print} = require ('./essential_functions');

/*===========================================*/
/*função main*/

(function(){

  let allPairNumbers = [], //Lista vazia
      max = gets(), //Tamanho da lista de entrada
      number; //Número que vai salvar cada elemento da lista

  /*Percorre a lista e verifica se cada elemento dela é par*/

  for(let i = 0; i < max; i++)
  {
    number = gets();

    if(number % 2 === 0) //caso seja par
    {
      allPairNumbers.push(number); //É adicionado na nova lista criada
    }
  }

  print(`Números pares: ${allPairNumbers}`); //Printa o conteúdo da lista de números pares criada

})()