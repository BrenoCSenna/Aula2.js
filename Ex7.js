let InfectadasInicial = 1_000; tempo = 100; Transmitidas = 4;

let InfectadasFinal = InfectadasInicial * Math.pow(Transmitidas, tempo / 7);

console.log("O n° de pessoas infectadas ao final de " + tempo + " meses será de "
    + InfectadasFinal.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "_") + " pessoas");