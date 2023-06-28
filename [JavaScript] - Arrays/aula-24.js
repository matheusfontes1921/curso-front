//.forEach
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


/* ambos os casos percorrem o array da mesma forma */
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i].nome)
;}

let soma = 0;
const somaIdade = (objeto) => {
    soma += objeto.idade;
}
lista.forEach(somaIdade);
console.log("Soma = ", soma);