interface Pessoa {
  nome: string;
  idade: number;
  maior: boolean;
}
const pessoa: Pessoa = {
  nome: 'Matheus',
  idade: 20,
  maior: true,
};
const number = 8;
console.log(pessoa.idade);
