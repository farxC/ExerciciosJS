const numeros = [10,20,30,40,50,60,70,80,90]
let menor
let maior

for(let i=0; i<numeros.length;i++){
    if(maior === undefined && menor === undefined){
        maior= numeros[i]
        menor= numeros[i]
    } else{
        if (numeros [i]>maior){
            maior = numeros [i]
        }
        if(numeros[i]< menor){
            menor= numeros[i]
        }
    }
    
}

console.log(maior)
console.log(menor)

