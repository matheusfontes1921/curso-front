//FUNÇÃO ASSÍNCRONA (Async Await)
const sleep = async (ms) => {
    /*vai resolver a promessa (operações porteriores)
    *após o tempo passado em ms */
    return new Promise(resolve => setTimeout(resolve, ms))
}

const aguardarComRetorno = async () => {
    await sleep (3000);
    return 30;
}
const aguardar =  async () => {
    console.log('Passou ', 4 ** 2);
    /*o setTimeout não bloqueia as suas operações
    *posteriores enquanto aguarda para ser executado*/
    await sleep(3000); /* com essa função, as outras linhas só 
    *serão executadas após esse tempo */
    console.log('Passou ', 5 ** 2);
    console.log('Passou ', 6 ** 2);
    console.log('Passou ', 7 ** 2);
}

const testeAguardar = async () => {
    console.log("Aguardando");
    const resultado = await aguardarComRetorno();
    console.log(resultado)
    console.log("Deu")
}

testeAguardar();