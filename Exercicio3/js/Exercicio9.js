"user strict"
let nome = prompt("Digite seu nome: ");
let nst = parseInt(prompt("Digite o ano do seu nascimento: "));
let at = parseInt(prompt("Digite o ano atual: "));

document.write(nome+"<br>")
document.write("Sua idade é: "+ (at-nst)+ "anos")

let subtração = (at-nst);

console.log(`Seu nome é: ${nome}`);
console.log(`Sua idade é: ${subtração}`)