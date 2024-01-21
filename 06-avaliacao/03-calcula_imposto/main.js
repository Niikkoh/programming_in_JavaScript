    /*

    Faça um programa que calcule e imprima o salário a ser transferido para um
    funcionário.
    Para realizar o cálculo receba o valor bruto do salário e o adicional dos benefícios.
    O salário a ser transferido é calculado da seguinte maneira:

        valor bruto do salário - percentual de imposto mediante a faixa salarial + valor
        dos benefícios

    Para calcular o percentual de imposto segue as alíquotas:

        De R$ 0.00 a R$ 1100.00 - 5.00%
        De R$ 1100.01 a R$ 2500.00 - 10.00%
        Maior que R$ 2500.00 - 15.00%

    Exemplo:
        Entrada:
            2000
            250

        Saída:
            2050.00

    */

/*====================================*/
/* Importação */

const { gets, print} = require('./essential_functions');

/*====================================*/
/* Classe empregado */

class Employee{

    constructor (salary, profit){

        this.salary = salary; // salário do empregado
        this.profit = profit; // Bonus do empregado
    }

    /* Informa o resultado de pagamento com as aliquotas completas*/

    calcPaymentMonth (){
        return this.salary - this.calcTax() + this.profit;
    }


    /* Informa o valor do imposto correspondente ao salário*/

    calcTax (){
        
        if(this.salary <= 1100)
        {
            return this.salary * 0.05;
        }
        else if(this.salary <= 2500)
        {
            return this.salary * 0.1;
        }
        else
        {
            return this.salary * 0.15;
        }
    }
}

/*====================================*/
/*Função Main*/

(function(){

    let nicolas = new Employee (gets(), gets()); //Instância um novo objeto

    print(`R$ ${nicolas.calcPaymentMonth().toFixed(2)}`); //Calcula o pagamento do mês do empregado e o envie a diretoria.

})()



