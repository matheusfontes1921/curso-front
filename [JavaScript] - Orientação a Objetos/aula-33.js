//HERANÇA

class Pessoa {
    email;
    senha;
    nome;

    constructor(email,senha,nome) {
        this.email = email;
        this.senha = senha;
        this.nome = nome;
    }
}

class Administrador extends Pessoa {
    permissoes;
    constructor(email,senha,nome,permissoes) {
        super(email,senha,nome);
        this.permissoes = permissoes;
    }
}

class Comprador extends Pessoa {
    compras;
    constructor(email,senha,nome,compras) {
        super(email,senha,nome);
        this.compras = compras;
    }
}

const permissoes = [5, 7, 12]
const admin = new Administrador("email", 123, "Matheus", permissoes);
console.log(admin);