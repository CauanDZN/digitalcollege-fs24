const lista = document.querySelector('ul')

lista.appendChild(document.createElement('li'))
lista.appendChild(document.createElement('li'))
lista.appendChild(document.createElement('li'))
lista.appendChild(document.createElement('li'))
lista.appendChild(document.createElement('li'))

const itens = document.querySelectorAll('li')

itens.forEach(function(item) {
  item.innerText = "Oi"
})