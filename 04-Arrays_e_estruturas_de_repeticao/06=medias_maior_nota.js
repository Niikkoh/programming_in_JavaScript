
    /*
    
    Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
    
    Ex de lista de notas = [2, 7, 3, 8, 10, 4]
    
    /*

/*==================================*/
/*Constantes*/

const ALL_GPA = [ 2, 7, 3, 8, 10, 4];

/*==================================*/
/*Função main*/

(function(){

    print(getHighestNote(ALL_GPA));

})()

/*==================================*/
/*Função*/


/* Retorna a maior nota da lista*/

function getHighestNote (allGPA)
{

    higherNote = 0;

    for(let i=0; i < allGPA.length; i++)
    {
        if(allGPA[i] > higherNote)
        {
            higherNote = allGPA[i];
        }
    }

    return higherNote;
}

/* printa um texto no console */

function print (text) 
{
    console.log(text);
}