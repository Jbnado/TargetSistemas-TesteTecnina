// def check_fibonacci(num):
//     # Iniciando os dois primeiros números da sequência de Fibonacci
//     a, b = 0, 1
    
//     # Caso o número seja um dos dois primeiros números da sequência
//     if num == a or num == b:
//         return True
    
//     # Continua calculando os próximos números da sequência
//     while b < num:
//         a, b = b, a + b
    
//     # Retorna verdadeiro se o número é encontrado, falso se não
//     return b == num

// # Exemplo de como o código seria chamado
// numero = 34  # Você pode alterar este valor para testar outros números
// pertence = check_fibonacci(numero)

// # Saída que informa se o número pertence ou não à sequência de Fibonacci
// "O número {} pertence à sequência de Fibonacci.".format(numero) if pertence else "O número {} não pertence à sequência de Fibonacci.".format(numero)

function checkIfIsFibonacci(num) {
  let a = 0;
  let b = 1;

  if (num === a || num === b) {
    return true;
  }

  while (b < num) {
    [a, b] = [b, a + b];
  }

  return b === num;
}

const num = 99; // Você pode alterar este valor para testar outros números
const isFibonacci = checkIfIsFibonacci(num);

console.log(`O número ${num} ${isFibonacci ? 'pertence' : 'não pertence'} à sequência de Fibonacci.`);
