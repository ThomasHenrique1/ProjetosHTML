$(function(){
    let btn = $("#btn1");
    btn.click(function(){
        exibirConteudos();

    })
});



function exibirConteudos(){
    let paragrafos = $("p");
    console.log(paragrafos);

    let art = $("artigo");
    console.log(art.html());

    let caixas = $(".caixa");
    console.log(caixas);
}