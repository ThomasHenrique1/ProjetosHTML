"use strict";

let pessoa1 ={
    nome : "Thomas",
    Idade : 18,
    Altura : 1.60
};

let pessoa2 = {
    nome : "Alcides",
    Idade: 40,
    Altura : 1.69
};
let pessoas = [pessoa1,pessoa2];

let div = document.querySelector("#rel_pessoas");
div.innerHTML = pessoas[0].nome + "<br>";
div.innerHTML += pessoas[1].nome;