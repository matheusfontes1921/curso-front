
const QUANTIDADE = 6;

calcularImpares(16)
function calcularImpares(inicial) {
let numerosImpares = 0;
while (numerosImpares < QUANTIDADE) {
    if (inicial % 2 === 1) {
        console.log(inicial);
        numerosImpares++
    }
    inicial++;
}
}