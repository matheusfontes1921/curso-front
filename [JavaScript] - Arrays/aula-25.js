//.filter

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

const filtrar = (objeto) => {
    return objeto.nome.charAt(1) === 'a';
}

const listaFiltrada = lista.filter(filtrar);

console.log(lista);
console.log(listaFiltrada);
