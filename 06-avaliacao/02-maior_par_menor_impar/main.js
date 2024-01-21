
  /*

    Faça um programa que receba N (quantidade de números) e seus respectivos valores
    e imprima o maior número par e o menor número impar.

        Exemplo:
            Entrada:
              5
              3
              4
              1
              10
              8
            
            Saída:
             
              Maior número par: 10
              Menor número impar: 1

  */

/*=====================================*/
/*Importação*/

const {gets, print} = require ('./essential_functions');

/*=====================================*/
/*Função main*/

(function(){

    let max = gets(),    //Tamanho da lista
        lowerOdd = Number.POSITIVE_INFINITY, // Menor número impar
        higherPair = Number.NEGATIVE_INFINITY, //Maior número par
        numberSave; //Salva o número da lista

    /*Percorre a lista*/

    for(let i=1; i < max; i++){
        
        numberSave = gets(); //Salva o elemento da lista na variável

        if(lowerOdd > numberSave && numberSave % 2 === 1){ //Se o número for impar e menor que o número registrado
            lowerOdd = numberSave;    //Registra
        } else if(higherPair < numberSave && numberSave % 2 === 0){ //Se o número for par e maior que o número registrado
            higherPair = numberSave; //Registra
        }
    }

    if(higherPair !== Number.NEGATIVE_INFINITY) // Verifica se há ao menos um número par na lista
    {
        print(`Maior número par: ${higherPair}`);
    }
    else
    {
        print(`Maior número par: não há número par na lista`);
    }
    
   
    if(lowerOdd !== Number.POSITIVE_INFINITY) // Verifica se há ao menos um número impar na lista 
    {
        print(`Menor número impar: ${lowerOdd}`);
    }
    else
    {
        print('Menor número impar: não há número impar na lista');
    }

})()
