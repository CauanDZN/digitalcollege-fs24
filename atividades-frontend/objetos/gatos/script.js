class Gato {
  constructor(nome = "", raca = ""){
    this.nome = nome;
    this.raca = raca;
  }

  miar(){
    console.log("miau");
  }

  comer(){
    console.log("nham nham");
  }

  dormir(){
    console.log("zzz");
  }

  seApresentar(){
    console.log(`Olá, eu sou o ${this.nome} da raça ${this.raca}`);
  }
}

let gatoMurph = new Gato("Murph", "Siamês");
console.log(gatoMurph)
gatoMurph.seApresentar();
gatoMurph.miar();
gatoMurph.comer();
gatoMurph.dormir();

let texto = window.document.body.getElementsByTagName("h1")[0];
texto.innerHTML = "Olá, eu sou o " + gatoMurph.nome + " da raça " + gatoMurph.raca;

// Função que muda o tema da página usando toggle

function mudarTema(){
  document.body.classList.toggle("dark");
}
