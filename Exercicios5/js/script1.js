"use strict"
let nomes=[]
 
while(true){
    let nome = prompt("Digite um nome:")
    if(nome == ""){
        break;
    }
    nomes.push(nome);
}

let div = document.querySelector("#tab")
let saida ="<table border='1'><thead class='jolonga'><td class='jolonga1'>Indice</td><td class='jolonga2'>Nome</td></thead>";

for(let  i=0; i < nomes.length;i++){
    saida+=`
    
    <tr class="row">
    <td>${i+1}</td>
    <td>${nomes[i]}</td>
    </tr>
    `
}

saida+="</table>"
div.innerHTML = saida;