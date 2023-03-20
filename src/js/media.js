let nota1 = parseFloat(prompt("Insira a nota 1: "));
let nota2 = parseFloat(prompt("Insira a nota 2: "));
let media = (nota1 + nota2) / 2;

document.write("Sua média é " + media);
document.write("<br>");

if(media >= 6) {
   document.write("Você está aprovado!");
} else if(media >= 5) {
   document.write("Você está de recuperação!");
} else {
   document.write("Você está reprovado!");
}