//Atividade 01
let amigo = ["Davi", "Pietro", "João"];
console.log(amigo);
console.log(amigo[01]);

//Atividade 02
const carro = {
    nome: "Civic",
    marca: "Honda",
    cor: "Preto"
};
console.log(carro);
console.log(carro.nome);
console.log(carro.marca);
console.log(carro.cor);
console.log(carro[01,03]);

//Atividade 03
let alunos = [
{nome: "João", turma: "3A", altura: "1,60"},
{nome: "Pietro", turma: "2B", altura: "1,55"},
{nome: "Davi", turma: "1C", altura: "1,50"}
];
console.log(alunos);
console.log(alunos[02]);

//Atividade 04
let nome = "Matheus"
let sobrenome = "Teixeira"
let curso = "desenvolvimetno de sistemas"

console.log(`Meu nome é ${nome} ${sobrenome} meu curso é ${curso}`);

//Atividade 05
let numeros = [1, 2, 3];
let outrosNumeros = [numeros, 4, 5, 6]

console.log(`Novo array ${outrosNumeros}`);

//Atividade 06
let materias = ["Projeto de vida ", "Sociologia ", "Geografia"];
materias.map(materia => console.log(`Materias preferidas: ${materias}`))