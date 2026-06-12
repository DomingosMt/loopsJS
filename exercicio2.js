const alunosMatriculados = Number(prompt("Digite a quantidade de alunos da turma."))

let notaAluno = prompt("Digite a nota do aluno. Caso queria finalizar, digite 'fim' ")

let notas = 0
for(; notaAluno !== 0;) {
    notas += Number(notaAluno)
}

alert(`A média desta turma é ${notas.toFixed(2)}`)