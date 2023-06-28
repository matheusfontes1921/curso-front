//CRIANDO CLASSE
class Pessoa {
    nome;
    idade;
    filhos;

    quantosFilhos(){
        if (this.filhos) {
            return this.filhos.length;
        }
        return 0;
    }


    constructor(nome, idade, filhos) {
        this.nome = nome;
        this.idade = idade;
        this.filhos = filhos;
    }
}

const f1 = new Pessoa("Gabriel", 15);
const f2 = new Pessoa("Cláudia", 45)

const pessoa = new Pessoa("Matheus", 20, [f1,f2])
console.log(pessoa.quantosFilhos())
console.log(pessoa);
console.log("Filhos  do filho 2 = ", f2.quantosFilhos())