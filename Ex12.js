let montante = 9000; capitalInicial = 6000; meses = 24;

let juros = (Math.pow((montante / capitalInicial), (1 / meses)) - 1) * 100;

console.log(`"O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${juros.toFixed(3)}%, pois após ${meses} meses você teve que pagar ${montante} reais."`);

