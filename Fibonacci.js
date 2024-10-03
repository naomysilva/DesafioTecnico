function isFibonacci(num) {
  let a = 0,
    b = 1;
  while (b < num) {
    [a, b] = [b, a + b];
  }
  return b === num || num === 0;
}

let numero = parseInt(prompt("Informe um número: "), 10);
if (isFibonacci(numero)) {
  console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}
