function ativarModal() {
   logico = !logico;
   if (logico) {
      janelaEscura.style.display = "flex";
   } else {
      janelaEscura.style.display = "none";
   }
}

const botao = document.querySelector(".botao");
const janelaEscura = document.querySelector(".janela-escura");
const modal = document.querySelector(".modal");
const fechar = document.querySelector(".fechar");
let logico = 0;

botao.addEventListener("click", ativarModal);
fechar.addEventListener("click", ativarModal);