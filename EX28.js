/*Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false. */

ehDivisivel= num =>{
    if (num % 3== 0){
        return true
    } else{
        return false
    }
}

console.log(ehDivisivel(4))
console.log(ehDivisivel(3))
console.log('---------------')

//(OFF) Crie uma função que verifica se um número inteiro passado com paramêtro é divisivel por outro número passado por paramêtro e retorne true ou false

ehDivisivel2= (num1,num2) =>{
    if(num1 % num2== 0){
        return true
    } else{
        return false
    }
}

console.log(ehDivisivel2(6,6))
console.log(ehDivisivel2(12096129182781290,5))

