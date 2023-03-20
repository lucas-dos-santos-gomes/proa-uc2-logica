const p = document.querySelector("p");
const button = document.querySelector("button");

function exibindoImc() {
   var weight = parseFloat(prompt("Insira seu peso em quilogramas: "));
   var height = parseFloat(prompt("Insira sua altura em metros: "));
   var imc = (weight / (height ** 2)).toFixed(1);

   p.innerHTML = "Seu IMC é " + imc;

   if(imc < 18.5) {
      p.innerHTML += "<br>Você está abaixo do peso!";
   } else if(imc < 25) {
      p.innerHTML += "<br>Seu peso é normal!";
   } else if(imc < 30) {
      p.innerHTML += "<br>Você está com sobrepeso!";
   } else if(imc < 35) {
      p.innerHTML += "<br>Você está com obesidade de grau 1!";
   } else if(imc < 40) {
      p.innerHTML += "<br>Você está com obesidade de grau 2!";
   } else if(imc <= 40) {
      p.innerHTML += "<br>Você está com obesidade de grau 3 ou mórbida!";
   } else {
      p.innerHTML += "<br>Você não definiu os valores pedidos!";
   }
}

window.onload = exibindoImc;
button.addEventListener("click", exibindoImc);
document.addEventListener("keydown", e => {
   if(e.shiftKey == true && e.key == "Enter") {
      exibindoImc();
   } 
});