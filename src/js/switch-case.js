let farol = prompt("Qual é a cor do sinal do farol?").toLowerCase();

switch (farol) {
   case "vermelho":
      document.write("PARE O CARRO!");
      break;
   case "amarelo":
      document.write("ATENÇÃO! Diminua a velocidade.");
      break;
   case "verde":
      document.write("Siga em frente à vontade.");
      break;
   default:
      document.write("Você digitou uma cor inválida.");
      break;
}