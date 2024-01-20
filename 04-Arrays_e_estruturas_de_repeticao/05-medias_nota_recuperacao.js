
  /*

     Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
    
     Ex de lista = [2, 7, 3, 8, 10, 4]

  */

/*==================================*/
/*Constantes*/

const ALL_GPA = [ 2, 7, 3, 8, 10, 4];

/*==================================*/
/*Função main*/

(function(){

    getHighestNote(ALL_GPA);

})()

/*==================================*/
/*Função*/

function getHighestNote (allGPA)
{

    for(let i=0; i < allGPA.length; i++)
    {
        if(allGPA[i] < 5)
        {
            console.log(allGPA[i]);
        }
    }

}