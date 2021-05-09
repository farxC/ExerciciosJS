function  aumento(planoDeTrabaho,salario){
    if(planoDeTrabaho=='A'){
        console.log('Seu salário recebeu um aumento de 10%. Seu novo salário é:',salario*10/100+salario )

    } else if(planoDeTrabaho=='B'){
        console.log('Seu salário recebeu um aumento de 15%. Seu novo salário é:',salario*15/100+salario )
    } else if (planoDeTrabaho=='C'){
        console.log('Seu salário recebeu um aumento de 20%. Seu novo salário é:',salario*20/100+salario)
    } else {
        console.log('Plano de trabalho inválido kappas')
    }

}

aumento('A',1000)
aumento('B',1000)
aumento('C',1000)
aumento('D',1000)