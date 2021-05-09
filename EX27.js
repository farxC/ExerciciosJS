function anuidade(mes,valorAnuidade){
    let juros= 5/100 
    if (mes !=0 && mes<=12){
        valorComJuros=  valorAnuidade*Math.pow(1+juros,mes)
        return 'O valor a ser pago pela anuidade é de R$'+ valorComJuros.toFixed(2)

        
    } else{
        return 'Mês não correspondente'

    }
}   
    

console.log(anuidade(5,100))
console.log(anuidade(13,100))
console.log(anuidade(0,100))

