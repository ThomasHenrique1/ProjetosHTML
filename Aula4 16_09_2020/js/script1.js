"use stric";

//media >= 5.75 APROVADO
//meida <= 5,75 REPROVADO
let media = Number(prompt("Digite a média:"));

if (media >= 0 && media <= 10){
    if(media >=5.75){
    alert("Aprovado");
    } else{
    alert("REPROVADO");
    }    
} else{
    alert('valor errado');
}

let x = 100
let resp = (x <= 10)? "correto" : "errado";
alert(resp);

let obj_data = new DataCue();
const dia_semana = obj_data.getDay();

switch(dia_semana){
    case 0: alert("Domingo"); break;
    case 1: alert("segunda"); break;
    case 2: alert("terça"); break;
    case 3: alert("quarta"); break;
    case 4: alert("quinta"); break;
    case 5: alert("sexta"); break;
    default: alert("valor errado");
}

