"use strict"

function anima(){
    let posX = Math.round(Math.random()*800);
    let posY = Math.round(Math.random()*500);
    document.querySelector("#personagem").style.top = posY + "px";
    document.querySelector("#personagem").style.left = posX + "px";
}
let tempo = setTimeout(anima, 1000);

/*setTimeout(function(){
    clearInterval(tempo);
}, 5000)*/

document.querySelector("#personagem").addEventListener("click", function(){
    clearInterval(tempo);
})