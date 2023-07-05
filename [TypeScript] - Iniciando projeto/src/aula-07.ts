class Outro {
  nome: string;
  constructor() {
    this.nome = '';
  }
}
interface Carro {
  anoFabricacao: number | string;
  nome: string;
}

interface Bicicleta {
  rodas: number;
}

const funcao = (validacao: boolean): Carro | Bicicleta => {
  if (validacao) {
    return {
      anoFabricacao: '2015',
      nome: 'Fox',
    };
  }
  return {
    rodas: 2,
  };
};

const resultado = funcao(true);

/* verifica se tem a propriedade anoFabricacao no resultado */
if ('anoFabricacao' in resultado) {
  if (typeof resultado.anoFabricacao === 'string') {
    console.log('É uma string');
  }
  console.log(resultado.anoFabricacao);

}
if ('rodas' in resultado) {
  console.log(resultado.rodas);
}

if (resultado instanceof Outro) {
  console.log('Outro');
}
