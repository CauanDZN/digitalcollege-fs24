// Exercício 1: Crie uma função que exiba uma mensagem de boas-vindas ao usuário quando a página for carregada.
// Utilize essa função para personalizar a experiência de cada usuário.
alert("Bem-vindo(a)!")

// Exercício 2: Desenvolva uma função que receba um número como parâmetro e verifique se ele é par ou ímpar.
// Retorne true se for par e false se for ímpar.
function parOuImpar(numero) {
    if (numero % 2 == 0) {
        return true
    } else {
        return false
    }
}

// Exercício 3: Implemente uma função que calcule a média aritmética de um array de números e retorne o resultado. 
// Utilize essa função para calcular a média de diferentes conjuntos de números.
function mediaAritmetica(numeros) {
    let soma = 0
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }
    return soma / numeros.length
};

// Exercício 4: Crie uma função que receba uma string como parâmetro e retorne a mesma string com todas as letras em caixa alta.
// Utilize essa função para converter diferentes strings.
function caixaAlta(string) {
    return string.toUpperCase()
}

// Exercício 5: Desenvolva uma função que determine se um número é primo ou não.
// Retorne true se for primo e false se não for.
function primo(numero) {
    let divisores = 0
    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            divisores++
        }
    }
    if (divisores == 2) {
        return true
    } else {
        return false
    }
}

// Exercício 6: Implemente uma função que inverta a ordem dos elementos em um array.
// Utilize essa função para inverter a ordem de diferentes conjuntos de elementos.
function inverterOrdem(array) {
    let arrayInvertido = []
    for (let i = array.length - 1; i >= 0; i--) {
        arrayInvertido.push(array[i])
    }
    return arrayInvertido
}

// Exercício 7: Crie uma função que receba um valor e uma porcentagem como parâmetros.
// A função deve retornar o valor acrescido da porcentagem indicada.
function acrescimo(valor, porcentagem) {
    return valor + (valor * porcentagem / 100)
}

// Exercício 8: Desenvolva uma função que verifique se uma palavra é um palíndromo (lê-se da mesma forma da esquerda para a direita e vice-versa).
// Retorne true se for um palíndromo e false se não for.
function palindromo(palavra) {
    let palavraInvertida = ""
    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraInvertida += palavra[i]
    }
    if (palavra == palavraInvertida) {
        return true
    } else {
        return false
    }
}

// Exercício 9: Implemente uma função que receba um número como parâmetro e retorne sua representação binária.
// Utilize essa função para converter diferentes números em binário.
function binario(numero) {
    let binario = ""
    while (numero > 0) {
        binario = numero % 2 + binario
        numero = Math.floor(numero / 2)
    }
    return binario
}

// Exercício 10: Crie uma função que calcule o fatorial de um número.
// Utilize essa função para calcular o fatorial de diferentes números.
function fatorial(numero) {
    let fatorial = 1
    for (let i = numero; i > 0; i--) {
        fatorial *= i
    }
    return fatorial
}