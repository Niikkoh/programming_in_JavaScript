 /*

    faça um programa que receba a média de um aluno.

    caso a média seja < 5 imprima "reprovado"
    caso a média seja >= 5 e < 7 imprima "recuperação"
    caso a média seja >= 7 imprima "aprovado"

    Exemplo:
        Entrada:
            5.5
        Saída:
            Recuperação
 */

/*============================================*/ 
/*Importação*/        

const {gets, print} = require ('./essential_functions');


/*============================================*/ 
/*classe*/

class Student{

    constructor(grade){

        this.grade = grade; //nota do aluno
    }

    /* Calcula a situação do aluno baseado em sua nota*/
    isAproved (){

        if(this.grade < 5){ //reprovado para notas menores que 5
            return 'Reprovado';
        } else if (this.grade < 7){ //recuperação para nota entre 5 e 7
            return 'Recuperação';
        } else {                   //Aprovação para nota 7 ou maior
            return 'Aprovado';
        }
    }

}

/*============================================*/ 
/*função main*/

(function(){

    let nicolas = new Student (gets()); //Instância um novo aluno

    print(nicolas.isAproved()); //Verifica se o aluno é aprovado

})()