//Object.defineProperty

class Usuario {
    senha;
    email;

    constructor(email,senha,nome) {
        this.email = email;
        this.senha = senha;
        Object.defineProperty(this,'nome', {
            value: nome,
            writable: true, /* se true, é possível mudar o nome através de user.nome */
            configurable: false, /*se true, é possível deletar o nome*/
            enumerable: true, /*se true, o nome será exibido no objeto*/

        })
    }
}

const user = new Usuario("matheus@gmail.com", 123, "Matheus");
console.log(user)