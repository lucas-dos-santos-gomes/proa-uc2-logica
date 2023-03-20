const imagens = document.querySelectorAll(".imagens");
const caixaAbsoluta = document.querySelectorAll(".container_absoluto");

imagens.forEach(imagem => {
   imagem.addEventListener("mouseover", e => {
      let idImagem = imagem.id;
      for(let i = 0; i < caixaAbsoluta.length; i++) {
         let classeCamadas = caixaAbsoluta[i].classList[1];
         if(idImagem == classeCamadas) {
            caixaAbsoluta[i].style.opacity = "1";
         }
      }
   });

   imagem.addEventListener("mouseout", () => {
      caixaAbsoluta.forEach(e => {
         e.style.opacity = "0";
      });
   });
});