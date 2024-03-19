"use strict"

let frutas = [];
frutas [0] = "Morango";
frutas [1] = "Uva";
frutas [2] = "Manga";
frutas [3] = "Lixia";

console.log(frutas);
console.log(frutas[3]);

let data_hora = new Date();
let mes = data_hora.getMonth();
let meses = ["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"];

console.log(meses[mes]);

for(let i=0; i < meses.length; i++){
console.log(meses[i]);
}

//for..of

for(let mes of meses){
    console.log(mes);
}

//forEach
meses.forEach((mes, i)  =>  {console.log(`${i+i}-${mes}`);
 });