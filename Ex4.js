let capital = 1_000; tempo = 5; taxaFixaDeJuros = 0.125;

let montante = capital * Math.pow((1 + taxaFixaDeJuros), 5);

console.log(`O valor do montante é de ${montante.toFixed(0)}`);