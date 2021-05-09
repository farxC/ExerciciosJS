function SistemaDeNotas(nota){
    if(nota==38){
        console.log('Você quase foi reprovado, porém sua nota foi arredondada:',Math.ceil(nota/5)*5)
    }else if(nota<38){
        console.log('Você foi reprovado, sua nota é:',nota) 
    } else{
        console.log('Sua nota foi arredondada:',nota%5===0 ? nota: Math.round(nota/5)*5)
    }

    


        
    

   

   

}


SistemaDeNotas(38)
SistemaDeNotas(84)
SistemaDeNotas(35)
SistemaDeNotas(41)
