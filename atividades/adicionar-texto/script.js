const input = document.querySelector('input')
const lista = document.querySelector('ul')

function adicionarItem() {
  const item = document.createElement('li')
  item.innerText = input.value
  lista.appendChild(item)
  input.value = ''
}

function removerItem() {
  lista.removeChild(lista.lastChild)
}

input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const item = document.createElement('li')
    item.innerText = input.value
    lista.appendChild(item)
    input.value = ''
  }
})
