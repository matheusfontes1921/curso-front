let numUm = 100;
let numDois = 200;

console.log(multiplos(numUm,numDois));

function multiplos(numUm,numDois) {
    let maior = 0;
    let menor = 0;
    if(numUm<numDois) {
        maior = numDois;
        menor = numUm;
    } else {
        maior = numUm;
        menor = numDois;
    }
    let soma = 0;
    for (let i = menor; i <= maior; i++) {
        if(i % 13 !== 0 ) {
        soma+=i;
        }
    }
    return soma;
}