//Object.defineProperties

const definingProperties = (valorInicial) => ({

        value: valorInicial,
        writable: false,
        configurable: false,
        enumerable: true,

})

class User {
    constructor(name,email,password) {
        Object.defineProperties(this,{
            name: definingProperties(name),
            email: definingProperties(email),
            password: definingProperties(password),
        })
    }
}

const user = new User("Matheus", "matheus@gmail.com", 1921);
console.log(user);
