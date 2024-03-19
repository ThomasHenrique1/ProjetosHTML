let base_alunos;

if(localStorage.getItem("alunos") !== null){
    base_alunos = JSON.parse(localStorage.getItem("alunos"));
}else{
    base_alunos = [];
}

$("#btn1").click(function(){
base_alunos.push({
    rgm : $("#txtrgm").val(),
    nome: $("#txtnome").val(),
    media: Number($("#txtmedia").val())
});
    localStorage.setItem("alunos",JSON.stringify(base_alunos));
});

$("#btn2").click(function(){
    let saida ="<table border='1'>";
    saida +="<tr><th>RGM</th> <th>NOME</th> <th>MÉDIA</th> <th>CONCEITO<th> </tr>";
    for(let aluno of base_alunos){
        saida += `<tr>
                    <td>${aluno.rgm}</td>
                    <td>${aluno.nome}</td>
                    <td>${aluno.media}</td>
                    <td>${getConceito(aluno.media)}</td>
                    </tr>`
    }
    saida+= "</table>";
    $("#rel").html(saida);
});

function getConceito(m){
    if (m >= 6){
        return "<span class='aprovado'>APROVADO</span>";

    }else if (m < 1){
        return "<span class='reprovado'>REPROVADO</span>";
    }else{
        return "<span class='exame'>EXAME</span>";
    }
}