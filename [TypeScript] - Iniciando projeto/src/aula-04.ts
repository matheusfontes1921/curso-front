interface Estado{
    nome: string;

}
interface Cidade {
    nome: string;
    estado: Estado;
}
interface Endereco {
  rua: string;
  bairro: string;
  cidade: Cidade;
  complemento?: string; /*faz o atributo ser opcional*/
}

const endereco1: Endereco = {
    rua: "Teste",
    bairro: "Teste",
    cidade: {
        nome: "Teste",
        estado: {
            nome: "Minas gerais"
        }
    }
}
console.log(endereco1)
