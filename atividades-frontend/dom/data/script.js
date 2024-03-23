const selecionado = document.querySelector('h1');

function atualizar() {
  const dataAtual = new Date().toLocaleString("pt-br");
  selecionado.textContent = dataAtual
}

setInterval(atualizar, 500)