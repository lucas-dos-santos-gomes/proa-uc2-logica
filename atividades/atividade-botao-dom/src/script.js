const html = document.querySelector("html");
const buttons = document.querySelectorAll("button");
const img = document.querySelector("img");
let btnToggle = false;

buttons.forEach(e => {
  e.addEventListener("click", () => {
    const btnCLass = e.classList[0];
    switch (btnCLass) {
      case "dark-mode":
        document.body.style.backgroundColor = "#000";
        document.body.style.color = "#CCC";
        img.src = "./src/img/lua.jpg";
        break;
      case "colorblind-mode":
        document.body.style.backgroundColor = "#584C98";
        document.body.style.color = "#5792CA";
        img.src = "./src/img/daltonismo.jpg";
        break;
      case "font-size":
        btnToggle = !btnToggle;
        if (btnToggle) {
          html.style.fontSize = "15px";
          e.innerText = "A-";
        } else {
          html.style.fontSize = "10px";
          e.innerText = "A+";
        }
        break;
      default:
        html.style.fontSize = "10px";
        document.body.style.backgroundColor = "#FFF";
        document.body.style.color = "#000";
        img.src = "./src/img/rodovia.jpg";
        btnToggle = false;
        buttons[3].innerText = "A+";
        break;
    }
  });
});