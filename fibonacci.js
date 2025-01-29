const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pertenceFibonacci(numero) {
    let a = 0, b = 1;
    while (b < numero) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b === numero || numero === 0;
}

rl.question('Digite um número: ', (numero) => {
    numero = parseInt(numero);
    if (pertenceFibonacci(numero)) {
        console.log(`${numero} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${numero} não pertence à sequência de Fibonacci.`);
    }
    rl.close();
});
