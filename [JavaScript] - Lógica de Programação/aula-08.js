//CONVERSÃO DE NÚMERO PARA STRING
const salario = 1300.610152;
/*toFixed transforma para string e e define o número de casas decimais*/
console.log("R$",salario.toFixed(3));

//CONVERSÃO DE STRING PARA NÚMERO
const salario2 = '1300.610152';
/*Number faz uma string virar número*/
console.log("R$", Number(salario2).toFixed(3));