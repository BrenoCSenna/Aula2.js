let valor_produto = 129.99; porcentagem_total = 100; valor_possuido = 80;

porcentagem_necessaria = ((valor_possuido * porcentagem_total) / valor_produto);

console.log(`O desconto que meu amigo precisa me dar para comprar o tênis de ${valor_produto} seria de pelo menos ${porcentagem_necessaria.toFixed(1)}%`);
