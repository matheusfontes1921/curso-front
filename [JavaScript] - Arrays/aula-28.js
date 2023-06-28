//.keys

const lista = [
    {
        nome: "Matheus",
        idade: 20,
    },
    {
        nome: "Gabriel",
        idade:15,
    },
    {
        nome: "Cláudia",
        idade: 45,
    },
    {
        nome: "Renato",
        idade: 52,
    }
]

const funcaoReduce = (acc,objeto) => {
    //acc => {} -> acumulador
    //após primeira linha, acc => {Matheus:
    // idade: 20}
    //após segunda linha, adiciona Gabriel
    return {
        ...acc,
        [objeto.nome]: {
            ...objeto,
        }
    }
}

const pessoas = lista.reduce(funcaoReduce, {
    /* caso passe esse parametro, o array já inciará
     * com um novo objeto - no casso, Julia
     */
    Julia: {
        idade:21,
    }
})

const keys = Object.keys(pessoas);

const listaBack = keys.map((chave) => ({nome: chave, idade: pessoas[chave].idade}))
console.log(listaBack)


