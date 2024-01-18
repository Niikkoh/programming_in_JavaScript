
/*Calcule a média de 5 notas de um aluno, usando uma estrutura de repetição e classe

 A classe deve conter o nome do aluno, as notas e a média

*/

/*================================*/
/*Constantes*/

const STUDENT_NAME = 'Nicolas';

const GRADE_1 = 9;
const GRADE_2 = 8;
const GRADE_3 = 8;
const GRADE_4 = 10;
const GRADE_5 = 9;


/*================================*/
/*Classe de aluno*/
 
class Student{

    constructor(name, grades){

        this.name = name; //Nome
        this.grades = grades; //Lista de notas

        this.gpa = this.calcGPA(); //Média das notas
    }

    /* Calcula a média das notas do aluno*/

    calcGPA (){

        let allGrades = 0;

        for(let i = 0; i < this.grades.length; i++){
            allGrades += this.grades[i];
        }

        return allGrades / this.grades.length;
    }

    /*Mostra a média das notas do aluno no console*/

    showGPA (){

        console.log(`A media das notas do aluno ${this.name} é ${this.gpa.toFixed(2)}`)
    }
}

/*================================*/
/*Função principal*/

(function (){

    let allGrades = [GRADE_1, GRADE_2, GRADE_3, GRADE_4, GRADE_5]; // Declara uma lista de notas e seus valores

    let nicolas = new Student(STUDENT_NAME, allGrades); //Instância um objeto Nicolas

    nicolas.showGPA(); //Mostra a média das notas de Nicolas

})()

