"use strict"

window.onload=function(){
    document.getElementById("botao").onclick=verifcarNum
}

function verifcarNum(){
    let num=parseInt(document.getElementById("txtvalor").value);
    if(num % 2 == 0){
        alert("É par");
    }else{
        alert("É impar");
    }
}