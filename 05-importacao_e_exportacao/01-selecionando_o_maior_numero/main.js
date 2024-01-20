
/*
       Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 - 100.
       Faça um programa que receba os 5 numeros sorteados (não pode receber num vetor) para os alunos e mostre o maior numero sorteado.

       Dados de entrada:
       5
       50
       10
       98
       23

       Saída:
       98
*/

/*============================*/
/* Importação */

const { searchHigherNumber, print} = require('./essential_functions');

/*============================*/
 /* Constante */

const NUMBER_ARRAY = [5, 50, 10, 98, 23];

/*============================*/
/* Função main */

(function (){

   print(searchHigherNumber(NUMBER_ARRAY));

})()

/*============================*/