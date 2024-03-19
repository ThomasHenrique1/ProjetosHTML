document.querySelector("#btn1").addEventListener("click",function(){
    let n = document.querySelector("#nome").value;
    document.querySelector("#rel").innerHTML="<h1>"+n+"</h1>";
});