"use strict"

let tab = Number(prompt("Digite a tabuado:"))

for(let i =0; i<=10; i = i+1){
    console.log(`${tab} X ${i}= ${tab * i}`);
}


console.log("*****************")

let cont=0;
while(cont <=10){
    console.log(`${tab} X ${cont}= ${tab * cont}`);
    cont = cont +1;
}


console.log("******************")

let y=0;
do{
    console.log(`${tab} X ${y}= ${tab * y}`);
    y++;
}while(y <=10);
