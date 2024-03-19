let col = 5;
let lin = 4;

for(i=1;i<=lin;i++){
    saida ="<tr id='tchau'>";
   
    for(j=1;j<=col;j++){
        document.querySelector("#ola").innerHTML+=`<td>${i}:${j}</td>`;
    }
    saida +="</tr>"
}