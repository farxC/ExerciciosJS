/*Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console. */

vetorInteiro= [1,2,3,4]
vetorString= ['A','B','C','D']
vetorDouble= [0.123,1.23,123.4]

console.log(vetorInteiro.concat(vetorString,vetorDouble))

console.log( vetorString[0].concat('-',vetorInteiro[0]))
console.log(vetorString[1].concat('-',vetorInteiro[1]))
console.log(vetorString[2].concat('-',vetorInteiro[2]))
console.log(vetorString[3].concat('-',vetorInteiro[3]))
