function criarTabuada(tabuada,fundo,x,y) {
   let paragraph = document.createElement("p");

   if(y == 0) {
      tabuada.innerHTML = (`<h3>Tabuada do ${x}</h3>`);
   }

   tabuada.classList.add("tabuada");
   tabuada.appendChild(paragraph);
   fundo.appendChild(tabuada);
   
   paragraph.innerText += (`${x} x ${y} = ${x*y}`);
}

let numeroTabuada = parseInt(prompt("Digite um número que você quer ver a tabuada"));
let primeiraTabuada = document.querySelector("main");
let paragrafo = document.createElement("p");
primeiraTabuada.appendChild(paragrafo);

for (let i = 0; i <= 10; i++) {
   if(i == 0) {
      let titulo = document.querySelector("h1");
      titulo.innerText += (" do " + numeroTabuada);
   }
   paragrafo.innerHTML += `${i} x ${numeroTabuada} = ${i*numeroTabuada}<br>`;
}
primeiraTabuada.innerHTML += "<hr>";

const fundoTabuadas = document.querySelector(".tabuadas");

for (let i = 0; i <= 10; i++) {
   let tabuada = document.createElement("div");
   for(let n = 0; n <= 10; n++) {
      criarTabuada(tabuada,fundoTabuadas,i,n);
      /*
      if(n == 0) {
         document.write(`<h3>Tabuada do ${i}</h3>`);
      }
      document.write(`${i} x ${n} = ${i*n}<br>`);
      */
   }
}
