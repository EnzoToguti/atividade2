// Igualdade

const valor = Math.floor(Math.random(1, 10) * 10);

if (valor == 10) {
    console.log("true");
} else {
    console.log("false");
};

// Diferença

const nome1 = "Nome A";
const nome2 = "Nome B";

if (nome1 != nome2) {
    console.log(`\nNomes diferentes (${nome1} e ${nome2})`);
} else {
    console.log("\nNomes iguais");
};

// Menor que

const numero = 5;

if (numero < 10) {
    console.log(`\n${numero} é menor que 10`);
}

// Maior que

const preco = Math.floor(Math.random(10, 60) * 100);

if (preco > 50) {
    console.log(`\nConsegue comprar: R$${preco}.00`);
} else {
    console.log(`\nNão consegue comprar: R$${preco}.00`);
};

// Menor/Maior ou igual

const idade = Math.floor(Math.random(10, 30) * 100);

if (idade >= 18) {
    console.log(`\nMaior de idade: ${idade} Anos`);
}

if (idade <= 18) {
    console.log(`\nMenor de idade: ${idade} Anos`);
}

//Operador ternário

const resultado = Math.floor(Math.random(0, 10) * 10)

console.log(resultado >= 7 ? `\nAprovado: Média ${resultado}.0` : `\nReprovado: Média ${resultado}.0`);

console.log(idade >= 18 ? "\nAdulto" : "\nMenor");

//Template literals

const nome = "Enzo";

console.log(`\nOlá, ${nome}!`);

const produto = "Produto";
const prodprec = Math.floor(Math.random(10, 100) * 100);
const quantidade = Math.floor(Math.random(10, 100) * 100);

console.log(`\nO produto "${produto}" Custa R$${prodprec}.00 e foi recebido na quantidade de ${quantidade} produtos`);