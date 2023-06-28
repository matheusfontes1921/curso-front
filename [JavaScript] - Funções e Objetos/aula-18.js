//FUNÇÃO DE CALLBACK
const teste1 = (callback) => {
    /*uma função será passada e essa será
    *executada após 1000 milissegundos*/
    setTimeout(() => {
        console.log('Teste 1');
    },1000)
    
}

const teste2 = (callback) => {
    setTimeout(() => {
        console.log('Teste 2');
        callback();
    },500);
}

const teste3 = (callback) => {
    setTimeout(() => {
        console.log('Teste 3');
    },4000)
}

const teste4 = (callback) => {
    setTimeout(() => {
        console.log('Teste 4');
    },100)
}

const funcaoCallBack = () => {
    console.log("Salvou o usuário");
}

teste1();
teste2(funcaoCallBack);
teste3();
teste4();