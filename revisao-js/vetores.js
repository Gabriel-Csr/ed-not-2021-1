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

//inserindo no final do vetor

frutas.push('amora') //pode inserir mais de um elemento ao mesmo tempo >> 'amora','jaca')
console.log(frutas)


//inserir no inicio do vetor

frutas.unshift('jabuticaba') // tambem pode ser inserido mais de um elemento ao mesmo tempo

console.log(frutas)

// inserção no meio do vetor
//Os parrametros entre parenteses indica respectivamente a posição do novo elemento do vetor, quantidade de elementos removidos após ele e logo a frente o(s) elemento(s) a serem inseridos
frutas.splice(2,0, 'pêssego') // inserindo terceira posição
// tambem funciona colocando vários elementos
console.log(frutas)

//usando splice para substituição
// a posição para substituição e numero de elementos excluidos (no caso 1) e logo em seguida o nome do termo a ser inserido
frutas.splice(4,1, 'ameixa') // Substituição na quinta posição
console.log(frutas)

//Inserção multipla com splice
frutas.splice(1,0, 'nectarina', 'jaca')
console.log(frutas)  // pode usar console.table para uma visualização diferente!!!!!

/***********************************
* PERCUESO DE VETOR */
// 1) Percurso com for tradicional
// a) A contagem começa em zero
// b) Ocorre enquanto um contador for MENOR que o número de elementos do vetor
// c) lenght termina com TH
// d) é o metodo mais flexivel pois, se mecessário, é possível fazer um percurso parcial ( começar em algum elemento que não é o primeiro e terminar antes do final)
for(let i = 0; i < frutas.length; i++) {
    console.log(i, frutas[i])
}   
// lenght é q quantidade de termos do vetor, o i++ é aumentando a lista enquanto a afirmação é verdadeira
////////////////////////////////
// 2) For tradicional em ordem inversa
// a) O contador inicia-se em lenght - 1
// b) A condição é contador MAIOR OU IGUAL a zero (0 - primeiro elemento)
for(let i = frutas.lenght -1; i >= 0; i--){
    console.log(i,frutas[i])
}

// 3) Percurso com for... of
// a) Sempre percorre o vetor inteiro, na ordem natural, sem necessidade de uma variável contadora
// Variáveis
// f > variável que receberá cada elemento do vetor ( pode ser qualquer nome válido de variavel)
// Frutas -> é o vetor a ser percorrido

//let x = 0
for (let f of frutas) {
    console.log(f)
}  
    // console.log(x, f)
    //x++

// 4) Percorrer com forEach
// forEach recebe como parametro uma função que recebe como parametro
// cada elemento do vetor
// o nome do parametro da função pode ser qualquer nome válido de identificador
frutas.forEach(function(elemento) { console.log(elemento)
    
});    

// O mesmo forEach, usando uma arrow function como parametro
frutas.forEach(elemento => console.log(elemento))