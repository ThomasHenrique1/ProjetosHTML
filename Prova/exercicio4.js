let dragon = [detran]

document.querySelector("#botao").addEventListener("click", function(){
    let pesquisa = document.querySelector("#pesq").value;
  
    for(i=0;i<500;i++){
    if(pesquisa == detran[i].placa){
        let div = document.querySelector("#placa");
        if (detran[i].gravidade == 'Leve') {
        div.innerHTML += `<div class="placa leve">
        <h1>Placa: ${detran[i].placa}</h1>
        <div class="flex">
        <div><img src="${detran[i].foto}"></div>
        <div>
        <p>CNH: ${detran[i].cnh}</p>
        <p>Nome :${detran[i].proprietario}</p>
        <p>Gravidade: ${detran[i].gravidade}</p>
        <p>Pontos: ${detran[i].pontos}</p>
        <p>Data: ${detran[i].data_infracao}</p>
        <p>Valor: ${detran[i].valor}</p>
        </div>
        </div>
        </div>`;   
        }  
        else if (detran[i].gravidade == 'Média'){
        div.innerHTML += `<div class="placa media">
        <h1>Placa: ${detran[i].placa}</h1>
        <div class="flex">
        <div><img src="${detran[i].foto}"></div>
        <div>
        <p>CNH: ${detran[i].cnh}</p>
        <p>Nome :${detran[i].proprietario}</p>
        <p>Gravidade: ${detran[i].gravidade}</p>
        <p>Pontos: ${detran[i].pontos}</p>
        <p>Data: ${detran[i].data_infracao}</p>
        <p>Valor: ${detran[i].valor}</p>
        </div>
        </div>
        </div>`;
        }
        else if(detran[i].gravidade == 'Grave'){
            div.innerHTML += `<div class="placa grave">
        <h1>Placa: ${detran[i].placa}</h1>
        <div class="flex">
        <div><img src="${detran[i].foto}"></div>
        <div>
        <p>CNH: ${detran[i].cnh}</p>
        <p>Nome :${detran[i].proprietario}</p>
        <p>Gravidade: ${detran[i].gravidade}</p>
        <p>Pontos: ${detran[i].pontos}</p>
        <p>Data: ${detran[i].data_infracao}</p>
        <p>Valor: ${detran[i].valor}</p>
        </div>
        </div>
        </div>`;   
        }
        else if(detran[i].gravidade == 'Gravíssima'){
            div.innerHTML += `<div class="placa gravissima">
        <h1>Placa: ${detran[i].placa}</h1>
        <div class="flex">
        <div><img src="${detran[i].foto}"></div>
        <div>
        <p>CNH: ${detran[i].cnh}</p>
        <p>Nome :${detran[i].proprietario}</p>
        <p>Gravidade: ${detran[i].gravidade}</p>
        <p>Pontos: ${detran[i].pontos}</p>
        <p>Data: ${detran[i].data_infracao}</p>
        <p>Valor: ${detran[i].valor}</p>
        </div>
        </div>
        </div>`;   
        }
        

    }
    }
   
})