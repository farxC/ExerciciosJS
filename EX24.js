/*38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor*/

function imparEntre(inicio=0,fim=100){
    if(inicio>fim){
        inicio= fim+inicio//10+100
        fim= inicio- fim//110-10
        inicio= inicio - fim//110-100
    }
    for (let novoInicio=inicio; novoInicio<=fim;novoInicio++){
        
        if(novoInicio %2==1){
            console.log(novoInicio)
        }
    }

}


console.log(imparEntre(100,10))