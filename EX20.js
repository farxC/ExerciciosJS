//32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.


function mediaAritmetica(valores){
    let soma=0
    for (let i=0; i< valores.length; i++){
        soma= valores[i] + soma

    }
     
    return soma/valores.length
    
}

valores=[10,10,10,10]
console.log(mediaAritmetica(valores))







