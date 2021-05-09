/*29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/

function numeros(vetor){
    let dentroDoIntervalo=0
    let foraDoIntervalo=0
    for(let i=0; i < vetor.length; i++){
        if(vetor[i]>=10 && vetor[i] <=20){
            dentroDoIntervalo++

        }else{
            foraDoIntervalo++



        }
    
    }
    return dentroDoIntervalo, foraDoIntervalo
}
vetor=[11,20,10,1,23,21]
console.log(numeros(vetor))
// CADE A PORRA DO ERRO????????????????
/*29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/

function numerosEntreDezEVinte(inteiros){
    let Dentro=0
    let Fora=0
    for (let i=0; i < inteiros.length;i++){
        if(inteiros[i]>=10 && inteiros[i]<=20){
            Dentro+= 1
    
        } else{
            Fora+= 1
    

        }
        
    }
    return 'Números entre: '+Dentro+'       Números fora: '+Fora
    
    
}
inteiros= [1,2,3,11,10,12,20,21,22,23]

console.log(numerosEntreDezEVinte(inteiros))
