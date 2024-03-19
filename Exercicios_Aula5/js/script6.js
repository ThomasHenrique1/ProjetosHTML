let rgms = [];
let nomes = [];
let parcial = [];
let exercicios = [];
let projetos = [];
let regimentais = [];


$("#btn1").click(function(){
let nome = $("#nome").val();
let rgm = $("#rgm").val();
let parc = Number($("#nota_parc").val());
let exer = Number($("#nota_exer").val());
let proj = Number($("#nota_proj").val());
let regi = Number($("#nota_regi").val());
 
rgms.push(rgm);
nomes.push(nome)
parcial.push(parc)
exercicios.push(exer)
projetos.push(proj)
regimentais.push(regi)
});


$("#btn2").click(function(){
    let saida="<table border='1'>"
    for(let i = 0; i < rgms.length; i++){
        let nf = parcial[i]+ exercicios[i]+ regimentais[i] +projetos[i];
        saida +=`<td>
        <td>${rgms[i]}</td>
        <td>${nomes[i]}</td>
        <td>${parcial[i]}</td>
        <td>${exercicios[i]}</td>
        <td>${projetos[i]}</td>
        <td>${regimentais[i]}</td>
        <td>${nf}</td>
        <td>${calcConceito(nf)}</td>
            </tr>    `
    }


    saida +="</table>";
    $("#resposta").html(saida);
})


function calcConceito(nf){
    if (nf >= 6){
        return "<span class='aprovado'>APROVADO</span>";

    }else if (nf < 1){
        return "<span class='reprovado'>REPROVADO</span>";
    }else{
        return "<span class='Avaliação Final'>EXAME</span>";
    }
}