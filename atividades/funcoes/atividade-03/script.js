// Exercício 1: Crie uma função que valide se uma senha atende aos critérios estabelecidos,
// como ter no mínimo 8 caracteres, pelo menos uma letra maiúscula,
// pelo menos uma letra minúscula e pelo menos um caractere especial.
function validarSenha(senha) {
    let maiuscula = false
    let minuscula = false
    let numero = false
    let especial = false
    if (senha.length < 8) {
        return false
    }
    for (let i = 0; i < senha.length; i++) {
        if (senha[i] >= 'A' && senha[i] <= 'Z') {
            maiuscula = true
        } else if (senha[i] >= 'a' && senha[i] <= 'z') {
            minuscula = true
        } else if (senha[i] >= '0' && senha[i] <= '9') {
            numero = true
        } else {
            especial = true
        }
    }
    if (maiuscula && minuscula && numero && especial) {
        return true
    } else {
        return false
    }
}

// Exercício 2: Implementar uma função que receba um número e retorne todos os números primos menores ou iguais a ele.
function primosAte(numero) {
    let primos = []
    for (let i = 1; i <= numero; i++) {
        let divisores = 0
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                divisores++
            }
        }
        if (divisores == 2) {
            primos.push(i)
        }
    }
    return primos
}

// Exercício 3: Criar uma função que remova elementos duplicados de um array e retorne o novo array sem duplicatas.
function removerDuplicatas(array) {
    let novoArray = []
    for (let i = 0; i < array.length; i++) {
        if (!novoArray.includes(array[i])) {
            novoArray.push(array[i])
        }
    }
    return novoArray
}

// Exercício 4: Desenvolver uma função que receba uma lista de nomes e
// retorne uma nova lista contendo apenas os nomes que começam com uma determinada letra.
function nomesQueComecamCom(lista, letra) {
    let novaLista = []
    for (let i = 0; i < lista.length; i++) {
        if (lista[i][0] == letra) {
            novaLista.push(lista[i])
        }
    }
    return novaLista
}

// Exercício 5: Implementar uma função que receba um texto e retorne o número de palavras presentes nele.
function contarPalavras(texto) {
    let palavras = texto.split(' ')
    return palavras.length
}

// Exercício 6: Criar uma função que receba uma data como parâmetro e retorne o dia da semana correspondente.
function diaDaSemana(data) {
    let dia = data.getDay()
    switch (dia) {
        case 0:
            return 'Domingo'
        case 1:
            return 'Segunda-feira'
        case 2:
            return 'Terça-feira'
        case 3:
            return 'Quarta-feira'
        case 4:
            return 'Quinta-feira'
        case 5:
            return 'Sexta-feira'
        case 6:
            return 'Sábado'
    }
}

// Exercício 7: Desenvolver uma função que ordene um array de objetos com base em uma determinada propriedade.
function ordenarPorPropriedade(array, propriedade) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j <= array.length; j++) {
            if (array[i][propriedade] > array[j][propriedade]) {
                let aux = array[i]
                array[i] = array[j]
                array[j] = aux
            }
        }
    }
    return array
}

// Exercício 8: Implementar uma função que calcule o fatorial de um número utilizando recursividade.
function fatorial(numero) {
    if (numero == 1) {
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}