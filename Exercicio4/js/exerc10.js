"use strict"

window.onload = function(){
    var btn = document.getElementById("botao");
    btn.onclick = function(){
        var num = parseInt(document.getElementById("txtnum").value);
        let fat = 1;
        for (let i=1; i<=num; i++){
            fat = fat *i;
        }
        document.getElementById("txtfat").value = fat;
    }
}