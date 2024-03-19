"use strict"

let campo_div = document.querySelector("#relatorio");

campo_div.innerHTML = "";

for(let i = 0; i<=10; i++){
    for(let y = 0; y<=10; y++){
    campo_div.innerHTML += `${i} X ${y} = ${i*y} <br>`;
}
campo_div.innerHTML += "<hr>";
}