process.stdin.setEncoding('utf8');

const subtracao = (valor) => {
    if(valor < 0) {
        throw new Error("Erro");
    }
    if (valor === 0) {
        return 0;
    }
    return valor + subtracao(valor - 1);
}
console.log("Digite um valor: ")
process.stdin.on('data', function(data) {
    try {

        console.log("Valor: ", subtracao(Number(data)));
    } catch (error) {
        console.log(error.message);
        process.stdin.pause();
    }
})