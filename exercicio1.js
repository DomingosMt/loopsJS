let preco = Number(prompt("Digite o preço do produto"))

let corEtiqueta = prompt("Digite a cor da etiqueta").toLowerCase()
const etiquetas = ["verde", "vermelho", "azul", "amarelo"]

while(!etiquetas.includes(corEtiqueta)) {
    corEtiqueta = prompt(`
        Digite uma das quatro opções de cores:
        Vermelho
        Azul
        Verde
        Vermelho`).toLowerCase()
}

switch (corEtiqueta) {
    case "verde":
        percentual = 0.1
        calDesconto = (preco * percentual).toFixed(1)
        desconto = (preco - calDesconto).toFixed(1)
        alert(`O valor total é igual a ${desconto} seu desconto é de ${calDesconto}`)
        break;

    case "vermelho":
        percentual = 0.4
        calDesconto = (preco * percentual).toFixed(1)
        desconto = (preco - calDesconto).toFixed(1)
        alert(`O valor total é igual a ${desconto} seu desconto é de ${calDesconto}`)
        break;

    case "amarelo":
        percentual = 0.2
        calDesconto = (preco * percentual).toFixed(1)
        desconto = (preco - calDesconto).toFixed(1)
        alert(`O valor total é igual a ${desconto} seu desconto é de ${calDesconto}`)
        break;

    case "azul":
        percentual = 0.3
        calDesconto = preco * percentual
        desconto = (preco - calDesconto).toFixed(1)
        alert(`O valor total é igual a ${desconto} seu desconto é de ${calDesconto}`)
        break;
}

// const resultado = `O valor total é igual a ${} e o valor com desconto é de ${}`