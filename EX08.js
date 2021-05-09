
function parEImpar2(numeros1){
    let par=0
    let impar=0
    for (let i=0; i < numeros1.length;i++){
        if(numeros1[i] %2==0){
            par++
    
        } else{
            impar++
    

        }
        
    }
    for(let i=0; i< numeros1.length; i++){
        if(numeros1[i] %2 == 0){
                console.log('Número par:',numeros1[i])
            } else {
                console.log('Número impar:',numeros1[i])
            }
        }
        
    return 'Números imparés: '+impar+'       Números pares: '+par
    
 
    
}
numeros1= [10,5,2,3,9,11,13,12]

console.log(parEImpar2(numeros1))

