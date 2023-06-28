//.sort

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

/*ordem alfabética*/
const ordenado = lista.sort((a,b) => {
    if (a.nome.toUpperCase() < b.nome.toUpperCase()) {
        return -1;
    }
})

console.log(ordenado)