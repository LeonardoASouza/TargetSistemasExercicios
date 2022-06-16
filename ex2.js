function isInFibonacci(valor) {
  fib = [0, 1];
  if (fib.includes(valor)) return "Pertence";
  if (valor >= 2) {
    while (fib[fib.length - 1] <= valor) {
      fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
      if (fib[fib.length - 1] == valor) return "Pertence";
    }
  }
  return "Não Pertence";
}

console.log(isInFibonacci(15));
