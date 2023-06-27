let numUm = 100;
let numDois = 200;

console.log(multiplos(numUm,numDois));

function multiplos(numUm,numDois) {
    let soma = 0;
    for (let i = numUm; i <= numDois; i++) {
        if(i % 13 !== 0 ) {
        soma+=i;
        }
    }
    return soma;
}