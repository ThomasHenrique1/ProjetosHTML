$("#button1").click(gravarCookie);
$("#button2").click(carregarCookie);
$("#button3").click(apagarCookie);

let conf={
    expires : 5,
    sameSite:'strict',
    domain: ''
}

function gravarCookie(){   
   Cookies.set("rgm",$("#rgm").val( ),conf);
   Cookies.set("nome",$("#nome").val( ),conf);
    limparCampos();
}
  
function carregarCookie(){
    if (Cookies.get("rgm") !=null){
        $("#rgm").val(Cookies.get("rgm"));
        $("#nome").val(Cookies.get("nome"));
    }
}
  
function apagarCookie(){    
    if (Cookies.get("rgm") !=null){
        Cookies.remove("rgm");
        Cookies.remove("nome");
}
  
function limparCampos(){
    $("#rgm").val("");
    $("#profissao").val("");
    $("#nome").val("");
    $("#cpf").val("");
}
