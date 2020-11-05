/**
 * Falso:
 * false
 * 0
 * []
 * ""
 * ''
 * null
 * undefined
 * NaN
 */

/**
 * Verdadeiro:
 * true
 * 1
 * -1
 * 0.5
 * "0"
 */

const podeDirigir = true;

if (podeDirigir) {
  console.log('Pode dirigir');
}

const saldoEmConta = 0;

if (!saldoEmConta) {
  console.log('Não tem saldo!')
}

const boolString = 'Hackerman!'
console.log(!!boolString)