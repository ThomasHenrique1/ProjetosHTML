"use strict";

let cvs = document.querySelector("#canvas");
let ctx = cvs.getContext("2d");

function Bolinha(cor,x,y,raio){
    this.cor = cor;
    this.x = x;
    this.y = y;
    this.raio = raio;
    this.exibir = function(){
        console.log("Cor", this.cor);
    }
}

function desenhar(bola){
    ctx.beginPath();
    ctx.arc(bola.x,bola.y,bola.raio,0,2 * Math.PI);
    ctx.fillStyle = bola.cor;
    ctx.fill();
}

let qtd = 10;
let bolinhas = [];
let cores = ["red","blue","green","purple","yellow","black","pink","orange"];

for(let i=1; i<= qtd; i++){
    let bola = new Bolinha(cores[Math.round(Math.random()*(cores.length - 1))],
                            Math.round(Math.random()*500),
                            Math.round(Math.random()*500),
                            Math.round(Math.random()*30)+10);
    bolinhas.push(bola);   
}

for (let b of bolinhas){
    setTimeout(function(){
        desenhar(b);
    },Math.round(Math.random()*4000)+1000);
}