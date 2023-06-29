//POLIMORFISMO

class Pessoa {
    email;
    senha;
    nome;

    validarSenha(email,senha){
        return email + senha === this.nome;
    }

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

    validarSenha(email, senha) {
        return email === 'email@email.com';
    }
}

class Comprador extends Pessoa {
    compras;
    constructor(email,senha,nome,compras) {
        super(email,senha,nome);
        this.compras = compras;
    }
}

const user = new Pessoa("matheus", 123, "matheus")
console.log(user.validarSenha(user.email,user.senha));

const admin = new Administrador("email@email.com", 1921, "Matheus");
console.log(admin.validarSenha(admin.email,admin.senha));