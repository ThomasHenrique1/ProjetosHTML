"use stict"

window.onload = function(){
    document.getElementById("botao").onclick = function(){
        calcularImc();
    }

    function calcularImc(){
        let altura = parseFloat(document.getElementById("txtaltura").value);
        let peso = parseFloat(document.getElementById("txtpeso").value);
        let imc = peso/(altura*altura);
        document.getElementById("txtimc").value = imc

        let sexo = 0;
        if(document.getElementById("sexoM")){
            sexo = 1;
        }else if(document.getElementById("sexoF")){
            sexo = 2;
        }
        let mensagem = conceitoImc(imc,sexo);

        document.getElementById("txtcondição").value = mensagem;
    }
     function conceitoImc(imc,sexo){
         let condicao="";
        if(sexo == 1){
            if(imc < 20.7){
            condicao = "abaixo do peso";
        }else if(imc >= 20.7 && imc <26.4){
            condicao ="no peso normal";
        }else if (imc >= 26.4 && imc < 27.8){
            condicao = "esta acima do peso";
        }else if (imc >= 27.8 && imc < 31.7){
            condicao ="acima do peso ideal";
        }else{
            condicao = "Obeso"
        }
        }else{
            if(imc <19.1){
                condicao = "abaixo do peso";
            }else if(imc >= 19.1 && imc < 25.8){
                condicao = "no peso normal";
            }else if (imc > 25.8 && imc < 27.3){
                condicao = "acima do peso";
            }else if (imc > 27.3 && imc < 32.3){
                condicao = "acima do peso ideal";

            }else{
                condicao = "Obeso";
            }
        }
          return condicao; 
 }
}