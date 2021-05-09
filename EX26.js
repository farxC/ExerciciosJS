/*39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.*/

function TrocaKapps(vetorA,vetorB){
    vetorA= [1,2,3,4,5]
    vetorB=[6,7,8,9,10]
    vetorA[0]= vetorB[0]
    vetorB[1]= vetorA[1]
    vetorA[2]=vetorB[2]

}



console.log(TrocaKapps())
