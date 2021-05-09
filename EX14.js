function retornarFrutas(fruta){
    switch (fruta){
        case 'Maçã': console.log('Não vendemos essa fruta')
        break
        case 'Kiwi': console.log('Estamos cm poucos kiwis')
        break
        case 'Melancia': console.log('Está 3 reais o quilo')
        break
        default: console.log('Nao tendi kaskapa')
    }


}

retornarFrutas('Maçã')
retornarFrutas('Kiwi')
retornarFrutas('Melancia')
retornarFrutas('kakis')

