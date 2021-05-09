
function numeroDeNegativos(inteiros){
    let negativos=0
    let positivos=0
    for (let i=0; i < inteiros.length;i++){
        if(inteiros[i]<0){
            negativos+= 1
    
        } else{
            if (inteiros[i]>0){
                positivos+=1
            }

        }
        
    }
    
    return 'Números negativos: '+negativos+'       Números positivos: '+positivos
    
    
}
inteiros= [10,20,30,-30,-60,-90,-140,-120]

console.log(numeroDeNegativos(inteiros))




