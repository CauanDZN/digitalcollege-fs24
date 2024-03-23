const dados = fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/ce/municipios")
.then((resposta) => resposta.json())
.then((resposta) => resposta.forEach(element => {
  document.body.innerHTML += "<li>" + element.nome + "</li>"
}))
