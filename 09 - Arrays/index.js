const minhaLista = [];
const minhaListaDeTarefas = [
  "Mandar E-mail",
  "Colocar Comida Para o Dog",
  "Limpar o Quarto",
  "Desenvolver algo massa",
  "Montar um robô",
  "Formatar o computador",
  "Realizar um commit"
]

// console.log(minhaListaDeTarefas[0])
// console.log(minhaListaDeTarefas[1])
// console.log(minhaListaDeTarefas[2])
// console.log(minhaListaDeTarefas[3])

// Array Inicial
console.log('Array Inicial: ', minhaListaDeTarefas)

// Quantidade de Itens no Array
console.log('Quantidade de Itens no Array: ', minhaListaDeTarefas.length)

// Adicionar Item no Array
minhaListaDeTarefas.push('Formatar o Computador')
console.log('Adicionar Item no Array: ', minhaListaDeTarefas)

// Remover Último Item da Lista
const ultimo = minhaListaDeTarefas.pop();
console.log('Último item da lista: ', ultimo)
console.log('Lista após remoção: ', minhaListaDeTarefas)

// Remover Primeiro Item da Lista
const primeiro = minhaListaDeTarefas.shift();
console.log('Primeiro item da lista: ', primeiro)
console.log('Lista após remoção: ', minhaListaDeTarefas)

// Remover Item Específico a Partir do Índice
console.log(minhaListaDeTarefas[2])
minhaListaDeTarefas.splice(2, 1)

// Array com diversos tipos;
const itens = [
  1, 'computer', 0.22
]

// Verificar tipo do Array
console.log(typeof(itens))

// Verificar se o array tem tipagem correta
console.log(Array.isArray(itens))

// Ordenação de Array
const numeros = [ 2, 3, 1, 0]
console.log(numeros.sort())

// Unir dois arrays
const novo = itens.concat([1, 2, 3])
console.log(novo)

// Unir dois arrays em uma string
console.log(itens.join(', '))

// Verificar índice do item no array
const index = itens.indexOf('computer')
// Retorna -1 quando não localiza.
console.log(index)

