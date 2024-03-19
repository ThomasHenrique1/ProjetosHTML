let jolonga = [detran]

let div = document.querySelector("#lista");
for(i=0;i<500;i++){
    div.innerHTML += `<div class="lista">
    <h3>${detran[i].estado+"-"+detran[i].cidade}</h3>
    <h1>${detran[i].placa}</h1>
    </div>;
    `
}