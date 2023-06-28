//.reduce

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

/* utilizar esse tipo de objeto faz com que
 * não seja necessário percorrer todo o array
 * para pegar as informações de determinada
 * pessoa
 */

// const pessoa = {
//     jose: {
//         idade: 61,
//     },
//     joao: {
//         idade: 58
//     },
//     maria: {
//         idade: 46,
//     }
// }

/* o reduce pega um array normal e transforma
 * para esse tipo
 */

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

console.log(pessoas);

const pessoasArray = lista.reduce((acc,objeto) => {
    acc.push(objeto.idade);
    return acc;
},[]);
