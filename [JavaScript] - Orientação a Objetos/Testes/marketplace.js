//MINHA SOLUÇÃO USANDO OBJECT.DEFINEPROPERTIES
class Produto {
    constructor(nome,preco,descricao,codigo,qtdEstoque) {
        Object.defineProperties(this,{
            nome: {
                get: () => nome,
            },
            preco: {
                get: () => preco,
                set: (value) => {
                    if (preco < 0) {
                        throw new Error('Preço deve ser maior que 0');
                    }
                    preco = value
                },
            },
            descricao: {
                get: () => descricao,
            },
            codigo: {
                get: () => codigo,
            },
            qtdEstoque: {
                get: () => qtdEstoque,
                set: (value) => {
                    if (qtdEstoque < 0) {
                        throw new Error('Quantidade no estoque não pode ser menor que 0')
                    }
                    qtdEstoque = value
                },
            }
        })
    }
}

class Smartphone extends Produto {
    marca;
    modelo;
    so;

    constructor(nome,preco,descricao,codigo,qtdEstoque,marca,modelo,so) {
        super(nome,preco,descricao,codigo,qtdEstoque);
        Object.defineProperties(this,{
            marca: {
                get: () => marca,
                set: (value) => marca = value,
            },
            modelo: {
                get: () => modelo,
                set: (value) => modelo = value,
            },
            so: {
                get: () => so,
                set: (value) => so = value
            }
        })
    }

    printDescription() {
        console.log(`Marca: ${this.marca} \n
        Quantidade no estoque: ${this.qtdEstoque} \n
        Preço: ${this.preco} \n
        Código: ${this.codigo}`)
    }
}

const smartphone1 = new Smartphone('iphone', 1500,' ', 1921, 0, 'Apple', 'iPhone 11 PRO Max', 'ios' );
smartphone1.preco = 1500;
smartphone1.codigo = 1921;
smartphone1.qtdEstoque = Number(smartphone1.qtdEstoque+1);

smartphone1.printDescription();