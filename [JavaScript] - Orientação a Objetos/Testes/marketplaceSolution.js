//SOLUÇÃO SEM UTILIZAR OBJECT.DEFINEPROPERTIES

class Produto {
    nome;
    preco;
    descricao;
    codigo;
    qtdEstoque;

    constructor(nome,descricao,codigo) {
        this.nome = nome;
        this.descricao = descricao;
        this.codigo = codigo;
        this.preco = 0;
        this.qtdEstoque = 0;
    }

    alterarPreco(value){
        if (this.preco < 0) {
            throw new Error("Preço deve ser maior que 0")
        }
        this.preco = value;
    }
    adicionarEstoque(qtd) {
        this.qtdEstoque += qtd;

    }
    removerEstoque(qtd) {

        if(this.qtdEstoque - qtd < 0) {
            throw new Error("Estoque não pode ser negativo")
        }
        this.qtdEstoque -= qtd;
    }

}

class Smartphone extends Produto {
    marca;
    modelo;
    so;

    constructor(nome,descricao,codigo,marca,modelo,so) {
        super(nome,descricao,codigo);
        this.marca = marca;
        this.modelo = modelo;
        this.so = so;
    }
    imprimirDescricao(){
        return `Nome: ${this.nome}\n
        Preço: ${this.preco}\n
        Descricao: ${this.descricao}\n
        Código: ${this.codigo}\n
        Quantidade no estoque: ${this.qtdEstoque}
        Marca: ${this.marca}\n
        Modelo: ${this.modelo}\n
        Sistema Operacional: ${this.so}`
    }
}

const smartphone1 = new Smartphone('Meu celular', 'Meu celular atual', 1921, 'Apple', 'Iphonne 14 PRO Max', 'iOS');
smartphone1.alterarPreco(1500);
smartphone1.adicionarEstoque(5);
smartphone1.removerEstoque(3)
console.log(smartphone1)