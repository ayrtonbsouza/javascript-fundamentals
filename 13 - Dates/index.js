// Meses começam no zero;
const birthDate = new Date(1995, 8, 5);
console.log(birthDate);

// Primeira data do JavaScript
const firstDate = new Date(0);
console.log(firstDate);

// Today
const today = new Date();
console.log(today.toString());
console.log(today.toLocaleDateString());
// Recomendado:
console.log(today.toISOString());

// Definindo data e horas
const day = today.getDate();
// Definindo uma data
today.setDate(day + 5); // + 5 dias depois de hoje
// Definindo uma hora
today.setHours(10, 30, 00)
console.log(`
  Day: ${today.getDate()};
  Month: ${today.getMonth()};
  Year: ${today.getFullYear()};
  Hours: ${today.getHours()};
  Minutes: ${today.getMinutes()};
  Seconds: ${today.getSeconds()};
`);

console.log(
  new Date(2020, 0, 1) > new Date(2000, 0, 1)
)