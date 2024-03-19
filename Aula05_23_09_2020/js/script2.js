"use strict"

document.querySelector("#btn1").addEventListener("click", function(){
    let info = document.querySelector("#texto").value;
    inverter(info);
    inserirSimbolo(info, "*");

})

function inverter(str){
    let saida = "";
    console.log(str.length);
    for(let i = str.length-1; i >= 0; i--){
        saida += str[1];
    }
    console.log(saida);
}

function inserirSimbolo(str,simbolo){
    let saida ="";
    for(let i=0; i < str.length-1; i++){
        saida += str[i] + simbolo;
    }
    saida += str[str.length-1];
    console.log(saida);
}