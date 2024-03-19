"use strict"
window.onload = function(){
    document.getElementById("botao").onclick = function(){
        calcular();
    }
}
function calcular(){
    let valor = document.getElementById("txtvalor");
    let parcelas = document.getElementById("txtparcelas");
    let resposta = document.getElementById("txtresult");


    let valorcompra = parseFloat(valor.value);
    let qtdparcelas = parseInt(parcelas.value);

    let mensagem="";
    let valorfinal = 0;
    

    if(qtdparcelas == 1){
        valorfinal = valorcompra;
        mensagem = "1X" + valorfinal;
        
    }else if (qtdparcelas == 2){
        valorfinal = (valorcompra + (valorcompra * 0.03))/2;
        mensagem= "2X" + valorfinal;
       
    }else{
        valorfinal = (valorcompra + (valorcompra * 0.07))/4;
        mensagem ="4X" + valorfinal;
       

    }
    valor.value = "";
    resposta.value = mensagem;
    
    
    

}