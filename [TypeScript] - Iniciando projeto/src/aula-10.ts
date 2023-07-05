class Escola {
    readonly nome: string; /*o default é public */
    private readonly alunos: Aluno[];

    constructor(nome: string) {
        this.nome = nome;
        this.alunos = [];
    }

    public adicionarAluno(aluno:Aluno) {
        this.alunos.push(aluno);
    }

}
class Aluno {
    /*o constructor dessa forma é a mesma coisa do que
    * está sendo feito acima
     */
    constructor(public readonly nome: string) {}
}
const escola = new Escola("Santo Agostinho");
const aluno1 = new Aluno("Matheus");
const aluno2 = new Aluno("Matheus Pereira");
escola.adicionarAluno(aluno1);
escola.adicionarAluno(aluno2);
console.log("Escola: ", escola);
