const fs = require('fs');

function calcularFaturamento(faturamentoDiario) {
    const faturamentoCompleto = faturamentoDiario.filter(f => f.faturamento > 0);
    
    // Calcular menor e maior valor de faturamento
    const menorFaturamento = Math.min(...faturamentoCompleto.map(f => f.faturamento));
    const maiorFaturamento = Math.max(...faturamentoCompleto.map(f => f.faturamento));
    
    // Calcular a média mensal
    const totalFaturamento = faturamentoCompleto.reduce((acc, f) => acc + f.faturamento, 0);
    const diasComFaturamento = faturamentoCompleto.length;
    const mediaMensal = totalFaturamento / diasComFaturamento;
    
    // Calcular o número de dias com faturamento superior à média
    const diasAcimaMedia = faturamentoCompleto.filter(f => f.faturamento > mediaMensal).length;
    
    return { menorFaturamento, maiorFaturamento, diasAcimaMedia };
}

function lerDadosJson(arquivo) {
    const dados = fs.readFileSync(arquivo, 'utf8');
    return JSON.parse(dados);
}
const faturamentoDiario = lerDadosJson('faturamento.json');


const { menorFaturamento, maiorFaturamento, diasAcimaMedia } = calcularFaturamento(faturamentoDiario);


console.log(`Menor valor de faturamento: ${menorFaturamento}`);
console.log(`Maior valor de faturamento: ${maiorFaturamento}`);
console.log(`Número de dias com faturamento superior à média: ${diasAcimaMedia}`);
