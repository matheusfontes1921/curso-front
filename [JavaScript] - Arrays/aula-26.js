//.find

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

const listaFind = (pessoa) => pessoa.nome.charAt(1) === 'a';

console.log(lista.find(listaFind))