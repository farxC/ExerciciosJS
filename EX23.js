/* 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.*/

function f1(para1=[2,3,4,5],para2=3){
    vetF= para1
    for(let i=0; i< para1.length; i++){
        vetF[i]=para1[i]*para2

    }
    return vetF

}

function f2(para3= [1,2,7,6,5],para4= 6){
    vetF1= para3
    for(let i=0; i<para3.length;i++){
        if(para3[i]>5){
            vetF1[i]= para3[i]*para4
        }
        

    }
    return vetF1

}
console.log(f1())
console.log(f2())