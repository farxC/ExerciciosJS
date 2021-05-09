const ehBissexto= ano =>{
    if(ano <= 0){
        return 'Ano inválido'


    } else if (ano %4 === 0) {
        return `O ano de ${ano} é bissexto`

    } else{
        return `O ano de ${ano} não é bissexto`

    }

   

        
    
}

console.log(ehBissexto(400))
console.log(ehBissexto(0))
console.log(ehBissexto(2075))