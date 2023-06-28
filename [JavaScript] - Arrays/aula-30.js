//.some e.every

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

/* verifica se algum elemento da lista inicia com
 * c
 */
const busca = lista.some((objeto) => objeto.nome.charAt(0) === 'c');
console.log(busca);

/* verifica se pelo menos uma pessoa tem 15 anos na
 * lista
 */
const buscaIdade = lista.some((objeto) => objeto.idade === 15);
console.log(buscaIdade);

/* verifica se todo mundo da lista tem pelo menos
 * 5 letras
 */
const procuraTodoNome = lista.every((objeto) => objeto.nome.length >=5);
console.log(procuraTodoNome)