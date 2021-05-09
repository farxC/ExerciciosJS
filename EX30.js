//Faça um algoritmo que calcule o fatorial de um número.



const calcFatorial = num => {
    if(isNaN(num)){
        'O Fatorial não pode ser calculado, já que é NaN'
    } else if (num === 0 || num === 1){
        return `O fatorial de ${num} é`, 1

    } else if(num < 0){
        return 'O número não pode ser calculado, já que é negativo '
    } else{
        resultadoFatoração= num
        mult1= num -1
        for(let i=mult1; i >1; i--){
            resultadoFatoração *= i
        }
        return `O resultado da fatoração de ${num} é ${resultadoFatoração}`
    }
}

console.log(calcFatorial(5))

function calcularFatorialRecursivamente (n) {
    if (n === 1) {
        return 1;
    }
     
    return n * calcularFatorialRecursivamente (n - 1);
}
 
function calcularFatorial (fatorial) {
    if (isNaN(fatorial)) {
        return 'Não existe fatorial de um texto';
    }
     
    if (!Number.isInteger(fatorial) || fatorial < 0) {
        return 'Não existe fatorial de um número não natural';
    }
     
    if (fatorial === 0 || fatorial === 1) {
        return 1;
    }
     
    return calcularFatorialRecursivamente(fatorial);
}
 
console.log(calcularFatorial(5));