const triangulo= (l1,l2,l3) =>{
if(l1 === l3 && l1===l2){
    console.log('Triangulo equilátero')

} else {
    if (l1===l2 || l1===l3){
        console.log('Triangulo Isósceles')
    } else{
        console.log('Triângulo Escaleno')
    }
}
}

triangulo(3,3,3)
triangulo(3,3,2)
triangulo(3,2,1)
