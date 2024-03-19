$("#btn1").click(function(){
    let x = document.querySelector("#txttexto").value.toUpperCase();
    $("#resp").html(x);
})

$("#btn2").click(function(){
    let vet_p = $("#txttexto").val().split("");
    for(let p of vet_p){
        $("#resp").append(p +"<br>");
    }
})