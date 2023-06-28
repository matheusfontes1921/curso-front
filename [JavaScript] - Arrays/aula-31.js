//.flatMap

const lista = [
    {
        nome: "Matheus",
        idade: 20,
        cartoes: ['1234', '1234'],
    },
    {
        nome: "Gabriel",
        idade:15,
        cartoes: ['1234', '1574'],
    },
    {
        nome: "Cláudia",
        idade: 45,
        cartoes: ['1854', '1274'],
    },
    {
        nome: "Renato",
        idade: 52,
        cartoes: ['1749', '1794'],
    }
]

/* faz com que os cartões se juntem em um único array */
const cartoes = lista.flatMap((cartao) => cartao.cartoes);
console.log(cartoes);