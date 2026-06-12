//Estruturas de repetição

// Estrutura For

// let inicializador = 0

// for(inicializador; condicao; incrementador) {

// }



let produtos = ["Refrigerante", "Frango", "Ovos", "Biscoito", "Água"]


for(let i = 0; i < produtos.length; i++) {
    console.log(produtos[i])
}

let alunos = [
    {
        id:1,
        nome: "Raul",
        curso: "Desenvolvimento FullStack"
    },

    {
        id:2,
        nome: "Kauan",
        curso: "Desenvolvimento FullStack"
    },

    {
        id:3,
        nome: "Felipe",
        curso: "Desenvolvimento FullStack"
    },

    {
        id:4,
        nome: "Lucas",
        curso: "Desenvolvimento FullStack"
    },

    {
        id:5,
        nome: "Domingos",
        curso: "Desenvolvimento FullStack"
    },

    {
        id:6,
        nome: "Rafael",
        curso: "Desenvolvimento FullStack"
    },

    {
        id:7,
        nome: "",
        curso: "Desenvolvimento FullStack"
    },
]

for(let i = 1; i <= alunos.length; i++) {
    let index = i - 1
    console.log(alunos[index])
}

//tabuada inversa

const numeroTeste = prompt("Diga o número para executar a tabuda.")
for(let i = 1; i <= 10; i++) {
    console.log(`${numeroTeste} x ${i} =  ${numeroTeste * i}`)
}


let numerosPares = [2,4,6,8,10]

for(let i = 5; i > 0; i--) {
    console.log(numerosPares[i-1])
}

//------------------

//while = enquanto

// let senha = prompt("Digite a senha.")

// while (senha !== "admin123") {
//     senha = prompt("Digite a senha correta.")
// }

// alert("Pode passar!")



let i = 0 
while (i < 10) {
    console.log(`i é igual a ${i}`)
    i++
}

//do..while

do {
    console.log("Fui executado mesmo na condição falsa")
} while (false);


let senha 
do {
    senha = prompt("Digite a senha correta")
} while (senha !== "1234");

    alert("Deu bom!")