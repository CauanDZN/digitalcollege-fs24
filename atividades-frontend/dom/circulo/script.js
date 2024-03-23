const selecionado = document.querySelector('#circulo');

function dia() {
  selecionado.style.background = "#ffff00";
}

function noite() {
  selecionado.style.background = "#444";
}

selecionado.addEventListener('click', function() {
  if (selecionado.style.background === "rgb(255, 255, 0)") {
    noite();
  } else {
    dia();
  }
});


const botoes = document.querySelectorAll('button');

botoes.item(0).addEventListener('click', function() {
  dia();
  this.style.background = "#ffff00";
});

botoes.item(1).addEventListener('click', function() {
  noite();
  this.style.background = "#444";
  this.style.color = "#fff";
});