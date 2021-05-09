

const numerosAteDez = (numeros) => {
    switch(numeros){
       case 10:
           console.log('Dez')
           break
       case 9:
           console.log('Nove')
           break
        case 8:
            console.log('Oito')
        case 7: 
            console.log('Sete')
            break
        case 6: 
            console.log('Seis')
            break 
        case 5:
            console.log('Cinco')
            break
        case 4:
            console.log('Quatro')
            break
        case 3:
            console.log('Três')
            break
        case 2:
            console.log('Dois')
            break
        case 1:
            console.log('Um')
            break
        default:
            console.log('Número inválido')
    }

    
}
numerosAteDez(4)
numerosAteDez(12)