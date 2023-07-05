interface Andar {
    passos?: number;
}

const funcaoTeste = (): number | undefined => {
    if(andar.passos && andar.passos > 5) {
        return 1002;
    }
    return undefined;
}
const x = funcaoTeste();
x.toFixed()
const andar: Andar = {
    passos: 10002,
};
console.log(andar)
