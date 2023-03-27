let lanche = prompt("Escolha seu lanche (1 / 2 / 3 / 4 / 5)");

switch (lanche) {
   case "1":
      document.write("Você escolheu o Big Mac");
      document.write("<br>R$ 24,90");
      break;
   case "2":
      document.write("Você escolheu o Big Tasty");
      document.write("<br>R$ 29,90");
      break;
   case "3":
      document.write("Você escolheu o Mac Lanche Feliz");
      document.write("<br>R$ 14,90");
      break;
   case "4":
      document.write("Você escolheu o Mac Picanha");
      document.write("<br>R$ 34,90");
      break;
   case "5":
      document.write("Você escolheu o Mega Bacon");
      document.write("<br>R$ 29,90");
      break;
   default:
      document.write("Escolha um lanche do cardápio");
      break;
}