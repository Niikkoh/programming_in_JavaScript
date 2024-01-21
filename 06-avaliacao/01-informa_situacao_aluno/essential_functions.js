/*============================================*/ 
/*Constantes*/

const STUDENT_GRADE = 5.5; //Nota exemplo do aluno

/*============================================*/ 
/*Funções*/

/*Simula a entrada de um dado*/

function gets()
{
    return STUDENT_GRADE;
}

/*Simula uma saída de dado*/

function print(text)
{
    console.log(text);
}

/*============================================*/ 
/*Exportação*/

module.exports = { gets, print};