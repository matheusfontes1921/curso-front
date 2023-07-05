interface Pessoas {
  idade: number;
  nome: string;
}
interface Users {
  pessoas: Pessoas[] /*array declarado do tipo Pessoas*/;
  cidade: string;
}

const user: Users = {
  cidade: 'Contagem',
  pessoas: [
    {
      idade: 20,
      nome: 'Matheus',
    },
    {
      idade: 21,
      nome: 'Teste',
    },
  ],
};

console.log(user);
