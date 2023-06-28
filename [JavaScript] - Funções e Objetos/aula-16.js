//TIPOS DE FUNÇÕES

function teste() {
    console.log('Teste')
}
const teste2 = function() {
    console.log('Teste 2')
} 
/*Arrow Function*/
const teste3 = () => console.log('Teste 3');
teste();
teste2();
teste3();

/*Será undefined, uma vez que a função não está
* devolvendo nada, apenas imprimindo */
const teste4 = teste3();
console.log(teste4);
/*Caso queira mudar, é necessário colocar um return na função*/
 