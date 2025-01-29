const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function inverterString(str) {
    let stringInvertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    return stringInvertida;
}
rl.question('Digite a palavra ou frase que deseja inverter: ', (minhaString) => {
    console.log(inverterString(minhaString));
    rl.close();
});
