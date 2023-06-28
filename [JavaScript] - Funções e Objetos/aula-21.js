//OBJETOS

/* Esse é um tipo de objeto chamado de DTO
(Data Transfer Object) */
const matheus = {
    idade: 20,
    peso: 76,
    nome: "Matheus",
    genero: "Masculino",
    time: "Cruzeiro",
    pais: "Brasil",
    filhos: false,
    curso: "Engenharia de Software",
}

const exibirInformacoes = (pessoa, qualInfo) => {
    console.log(`${qualInfo} do ${pessoa.nome}`, pessoa[qualInfo]);
}
exibirInformacoes(matheus, "time"); 