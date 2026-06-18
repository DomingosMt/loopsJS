const alunosMatriculados = Number(prompt("Digite a quantidade de alunos da turma."))

let notas = 0
for(let i = 1; i <= alunosMatriculados; i++) {
    let notaAluno = prompt("Digite a nota do aluno.")
    notas += Number(notaAluno)
    console.log(notas)
}

const resultado = notas / alunosMatriculados

alert(`A média desta turma é ${resultado.toFixed(1)}`)