const body = document.querySelector("body");
const button = document.querySelectorAll("input");
const imagem = document.querySelector("img");

button.forEach(b => {
   b.onclick = mudarCor;
});

function mudarCor(e) {
   var id = e.srcElement.id;
   var cor = e.srcElement.classList[0];
   var img = e.srcElement.classList[1];

   body.style.backgroundColor = id;
   body.style.color = cor;
   imagem.src = "./src/img/" + img + ".jpg";
}