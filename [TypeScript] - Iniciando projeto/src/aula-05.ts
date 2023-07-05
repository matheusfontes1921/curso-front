interface ObjetoQualquer {
  funcao: (param1: number, param2: number) => number;
}
const funcaoTeste = (param1: number, param2: number) => {
  return param1 * param2;
};
const teste: ObjetoQualquer = {
  funcao: funcaoTeste,
};
funcaoTeste(1, 2);
console.log(teste);
