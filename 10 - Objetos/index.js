const hero = {
  name: 'Batman',
  age: 21,
  gender: 'Male'
}

console.log('Nome: ', hero.name)
console.log('idade: ', hero.age)
console.log('Gênero: ', hero.gender)
console.log('notFound: ', hero.notFound)

// Criação de uma nova chave
hero.id = 1

// Retornar chaves de um objeto
console.log(Object.keys(hero))

// Retornar os valores de um objeto
console.log(Object.values(hero))

// Unir dois objetos
const person = {
  height: '1.87m'
}

const newObject = Object.assign(hero, person)

console.log(newObject)

// Deletar uma chave do objeto
delete newObject.height
console.log(newObject)