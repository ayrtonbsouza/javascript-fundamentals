// Estrtura de uma função
function functionName(parameter) {
  // Code block
}

//Função sem parâmetro
function whatDayIsToday() {
  const date = new Date();
  console.log(`Hoje é dia: ${date.getDate()}`);
}

whatDayIsToday()

// Função com parâmetros
function sum(v1, v2) {
  console.log(`A soma dos valores ${v1} e ${v2} resulta em `, v1 + v2);
}

sum(5, 7);
sum(4, 2);

// Funções podem retornar valores
function myData(age, height) {
  return data = {
    age,
    height
  }
}

const age = 25;
const height = 187;

const result = myData(age, height)
console.log(result)