// função que eleva um numero ao quadrado
// se precisar disso em uma situação real, use math.pow() ou
// o operador **
function quadrado(n) { return n * n 

}
console.log(quadrado(9))

// Caracteristicas da função acima:
// 1) Apenas um parametro
// 2) Apenas uma linha de código, com return
// 3) CANDIDATA PERFEITA A VIRAR ARROW FUNCTION

//Transformando em arrow function
// a) Não precisa de parenteses envolvendo o parametro
// b) A palavra function é substituida pelo sinal de flecha =>, DEPOIS do parametro
// c) Bão são necessárias as chaves nem a palavra return
const quadrado2 = n => n * n
console.log(quadrado2(9))