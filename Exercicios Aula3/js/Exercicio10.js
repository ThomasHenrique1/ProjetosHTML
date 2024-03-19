"use strict"

let degrau = parseFloat(prompt("Digite o valor da altura do degrau:"))
let escada = parseFloat(prompt("Digite o valor da altura que deseja subir:"))
let Altura = escada/degrau
document.write(`Para subir ${degrau}metros, você precisa subir ${Altura} desgraus.`)


console.log(`A altura sera: ${Altura} metros`)
