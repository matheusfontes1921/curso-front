//.map
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

/*as duas representações são formas de
fazer a mesma coisa */

const converterObjeto = (objeto) => {
    return objeto.idade;
}
/* um array apenas com a idade dos objeto no
array lista será criado
 */
console.log(lista.map((objeto) => objeto.idade));
console.log(lista.map(converterObjeto));


/* mantem as variaveis do objeto criado inicialmente
*  e acrescenta a variavel nomeIdade
* */
const manterObjeto = (objeto) => {
    return {
        ...objeto, /* já coloca todas as informações que estavam presentes */
        nomeIdade: `${objeto.nome} - ${objeto.idade}`

    };
}
console.log(lista.map(manterObjeto));