$("#btn1").click(function(){
    let str_pesq = $("#pesq").val();
    let tipo_pesq = $("#tipo").val();
    pesquisar(str_pesq,tipo_pesq);
})

function pesquisar(str,tipo){
    $("#resultado").html("");
    for(let livro of biblioteca){
        switch(tipo){
            case "1":
                if(livro.titulo.indexOf(str)>= 0){
                    montaLivro(livro);
                }
                break;
            case "2":
                if(livro.classificacao == str){
                    montaLivro(livro);
                }
                break;
        }
    }
}
function montaLivro(livro){
    let autores = "";
    for(let autor of livro.autores){
        autores += autor.nome + "<br>";
    }
    $("#resultado").append(

        `<div class="bolha">
        <strong>Titulo:</strong><br>${livro.titulo}<br>
                            <strong>Autor(es):</strong><br>${autores}<br>
                            <strong>Edição:</strong><br>${livro.edicao}<br>
                            <strong>Assunto:</strong><br>${livro.assunto}<br>
                            <strong>Ano:</strong><br>${livro.ano}<br>
                            <strong>Local:</strong><br>${livro.local}<hr>
                            </div>`)
}