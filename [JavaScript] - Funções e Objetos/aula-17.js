//ESCOPO LÉXICO

/* a variável de fora é pai da função,
*então a função consegue receber o valor*/
const idade = 21;
const exibirIdade = () => {
    console.log(idade);
}
exibirIdade();

/* contudo, se for definida a variavel dentro
* da função, ainda que com o mesmo nome, o valor 
*será atualizado */
const termos = 16;
const exibirTermos = () => {
    const termos = 61;
    console.log(termos);
}
exibirTermos();