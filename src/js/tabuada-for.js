let tabuada = parseInt(prompt("Digite um número que você quer ver a tabuada"));

for (let i = 0; i <= 10; i++) {
   for(let n = 0; n <= 10; n++) {
      if(n == 0) {
         document.write(`<h3>Tabuada do ${i}</h3>`);
      }
      document.write(`${i} x ${n} = ${i*n}<br>`);
   }
}
const body = document.querySelector("body");
let elemento = document.createElement("div");
body.appendChild(elemento);
console.log(body);
