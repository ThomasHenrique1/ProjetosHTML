"use strict"
window.onload = function(){
    var num_secreto;
    var tentativas=0;
    var div_msg = document.getElementById("msg");
    var campo_dica= document.getElementById("txtdica");

    num_secreto = sortearNumero();
     document.getElementById("botao").onclick = function(){
         tentativas++;
         var num_chute = parseInt(document.getElementById("txtchute").value);
         if(num_chute < num_secreto){
             campo_dica.value ="O numero sorteado é maior";
         }else if(num_chute > num_secreto){
             campo_dica.value="O numero sorteado é menor";

         }else{
             div_msg.innerHTML="<h1>Parabéns, Você acertou em cheio em" +tentativas+ "tentativas</h1>"+"<h2>Pressione f5 para jogar novamente</h3>"
         }
     }
}
function sortearNumero(){
    return Math.round(Math.random()*100);

}