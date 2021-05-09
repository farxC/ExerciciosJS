function planoDeSaude(idade,precoDoPlano=100){
    if(idade<10){
        console.log('O valor a ser pago pelo plano de saúde é de R$',precoDoPlano+80,',00')


    } else if (idade>=10 && idade <=30){
        console.log('O valor a ser pago pelo plano de saúde é de R$',precoDoPlano+50,',00')
    } else if (idade>30 &&  idade <=60){
        console.log('O valor a ser pago pelo plano de saúde é de R$',precoDoPlano+95,',00')
    } else if (idade >60){
        console.log('O valor a ser pago pelo plano de saúde é de R$',precoDoPlano+130,',00')
    }
}
planoDeSaude(10)
planoDeSaude(8)
planoDeSaude(31)
planoDeSaude(61)