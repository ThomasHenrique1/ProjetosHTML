"use strict"

let qtd_m = 0;
let qtd_f = 0;
let somaAlturaM = 0;
let somaAlturaF = 0;

document.querySelector("#btn1").addEventListener("click", function(){
    let gen = document.querySelector("#genero").value;
    let alt = Number(document.querySelector("#altura").value);
    if(gen == "0"){
        qtd_m++;
        somaAlturaM = somaAlturaM + alt;

    }else if (gen == "1"){
        qtd_f++;
        somaAlturaF += alt;
    }
});

document.querySelector("#btn2").addEventListener("click", function(){
    document.querySelector("#m").innerHTML = "M = " + qtd_m;
    document.querySelector("#f").innerHTML = "F = " + qtd_f;
});

//declaração de função

function calcMedia(soma,qtd){
    return soma/qtd;
}

//Arrow Function
let calcMediaArrow1 = (soma,qtd) => {return soma/qtd};
let calcMediaArrow2 = (soma,qtd) => soma/qtd;


document.querySelector("#btn3").addEventListener("click", function(){
    document.querySelector("#media_m").value = calcMedia(somaAlturaM, qtd_m);
    document.querySelector("#media_f").value = calcMedia(somaAlturaF, qtd_f);
})