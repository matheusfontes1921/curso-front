//GET and SET

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
            name: {
                get: () => name,
                set: (value) => name = value,
            },
            email: {
                get: () => email,
                set: (value) => email = value,
            },
            password: {
                get: () => password,
                set: (value) => {
                    if(value.length < 4) {
                        throw new TypeError("At least 4 characters")
                    }
                    password = value
                }
            },
        })
    }
}

const user = new User("Matheus", "matheus@gmail.com", 1921);
console.log(user.email);
user.password = '12'
console.log(user.password);
