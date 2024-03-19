"use strict"
let num1,num2;
window.onload = function(){
    document.getElementById("btnsoma").onclick =calcSoma;
    document.getElementById("btnsub").onclick =calcSubtracao;
    document.getElementById("btnmult").onclick =calcMultiplicacao;
    document.getElementById("btndiv").onclick =calcDivisao;
}
function lerNumero(){
num1 = parseFloat(document.getElementById("txtnum1").value);
num2 = parseFloat(document.getElementById("txtnum2").value);
}

function resultado(res){
document.getElementById("txtresult").value = res;
}


function calcSoma(){
    lerNumero();
    resultado(num1+num2);
}
function calcSubtracao(){
    lerNumero();
    resultado(num1-num2);
}
function calcMultiplicacao(){
    lerNumero();
    resultado(num1*num2);
}
function calcDivisao(){
    lerNumero();
    resultado(num1/num2);
}