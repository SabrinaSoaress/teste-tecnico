// usando prompt() 
function inverterString(str) {
    let stringInvertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    return stringInvertida;
}

let minhaString = "Exemplo de string";
console.log(inverterString(minhaString));
