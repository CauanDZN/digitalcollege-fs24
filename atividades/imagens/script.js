const imgs = [
  "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/12/08/1051117219-san-x-for-8-1200x800-1.jpg",
  "https://medias.itatiaia.com.br/dims4/default/f397825/2147483647/strip/true/crop/1000x563+0+0/resize/1000x563!/quality/90/?url=https%3A%2F%2Fk2-prod-radio-itatiaia.s3.us-east-1.amazonaws.com%2Fbrightspot%2F09%2F0b%2F9f04275ab60d8a069270c5072c96%2Fjuan-pablo-vojvoda-t7d417c00-9e20-41fe-ae0f-f480eaed07b6.jpg",
  "https://s2-ge.glbimg.com/RqbO58V3yj2G8E3tsf9WHlCSzyw=/0x0:5189x3459/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/v/g/Cp7sasR1eHPWk1U0m41A/escudo-em-braile-1-.jpg",
  "https://nocariritem.com.br/wp-content/uploads/2023/12/SAN-X-FOR-10-1200x800-1-860x573.jpg"
]

function criarImg(url) {
  const imgElement = document.createElement("img")
  imgElement.src = url
  imgElement.width = 500

  return imgElement
}

function adicionarImg(img) {
  document.body.appendChild(img)
}

const imagens = imgs.map(criarImg)
imagens.forEach(adicionarImg)