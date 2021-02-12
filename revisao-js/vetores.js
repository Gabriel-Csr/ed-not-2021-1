let frutas = ['maça', 'laranja', 'pera', 'uva', 'mamao', 'banana']

//vetor original

console.log(frutas)

//Retirar o ultimo elemento do vetor

let ultimaFruta = frutas.pop()

//vetor alterado

console.log(frutas)
console.log(ultimaFruta)

// Remoção do primeiro termo do vetor

let primeiraFruta = frutas.shift()

console.log(frutas)
console.log(primeiraFruta)

//Remoção em posição internediária

let terceiraFruta = frutas.splice(2,1) // Sempre retornará um vetor ao invés de uma string

console.log(frutas)
console.log(terceiraFruta)
