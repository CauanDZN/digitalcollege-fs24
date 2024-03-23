// Exercício 1: Crie uma função que receba dois números como parâmetros e retorne a soma deles.
// Utilize essa função para realizar somas diferentes.
function soma(numero1, numero2) {
    return numero1 + numero2
}

// Exercício 2: Desenvolva uma função que calcule o valor de um produto com desconto.
// A função deve receber o valor original do produto e o percentual de desconto como parâmetros,
// e retornar o valor com desconto aplicado. Utilize essa função para calcular o valor final de diferentes produtos.
function desconto(valor, porcentagem) {
    return valor - (valor * porcentagem / 100)
}

// Exercício 3: Implemente uma função que verifique se uma palavra é um anagrama de outra.
// Um anagrama é uma palavra que pode ser formada a partir de outra, reorganizando suas letras.
// Retorne true se for um anagrama e false se não for.
function anagrama(palavra1, palavra2) {
    if (palavra1.length != palavra2.length) {
        return false
    } else {
        let palavra1Ordenada = palavra1.split('').sort().join('')
        let palavra2Ordenada = palavra2.split('').sort().join('')
        if (palavra1Ordenada == palavra2Ordenada) {
            return true
        } else {
            return false
        }
    }
}

// Exercício 4: Crie uma função que receba um número como parâmetro e verifique se ele é um quadrado perfeito.
// Um quadrado perfeito é um número que pode ser expresso como o produto de dois números iguais.
// Retorne true se for um quadrado perfeito e false se não for.
function quadradoPerfeito(numero) {
    for (let i = 0; i <= numero; i++) {
        if (i * i == numero) {
            return true
        }
    }
    return false
}

// Exercício 5: Desenvolva uma função que calcule a área de um círculo.
// A função deve receber o raio como parâmetro e retornar a área calculada.
function areaCirculo(raio) {
    return Math.PI * raio * raio
}

// Exercício 6: Implemente uma função que receba uma string como parâmetro e verifique se ela é um palíndromo,
// ignorando maiúsculas e minúsculas. Retorne true se for um palíndromo e false se não for.
function palindromo(string) {
    let stringInvertida = string.split('').reverse().join('')
    if (string.toLowerCase() == stringInvertida.toLowerCase()) {
        return true
    } else {
        return false
    }
}

// Exercício 7: Crie uma função que receba uma lista de números como parâmetro e retorne o maior número da lista.
function maiorNumero(numeros) {
    let maior = numeros[0]
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i]
        }
    }
    return maior
}

// Exercício 8: Desenvolva uma função que converta uma temperatura de Celsius para Fahrenheit.
// A função deve receber a temperatura em Celsius como parâmetro e retornar a temperatura convertida.
function celsiusParaFahrenheit(celsius) {
    return celsius * 1.8 + 32
}

// Exercício 9: Implemente uma função que calcule a média ponderada de um conjunto de notas.
// A função deve receber as notas e os respectivos pesos como parâmetros, e retornar a média ponderada.
function mediaPonderada(notas, pesos) {
    let soma = 0
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i] * pesos[i]
    }
    return soma / notas.length
}

// Exercício 10: Crie uma função que receba um número como parâmetro e verifique se ele é um número primo.
// Retorne true se for um número primo e false se não for.
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
