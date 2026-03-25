// Igualdade

const valor = Math.floor(Math.random(1, 10) * 10);

if (valor == 10) {
    console.log("É igual a 10");
} else {
    console.log(`É igual a ${valor}`);
};

// Diferença

const nome1 = "A";
const nome2 = "B";

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
    console.log(`\nConsegue comprar: ${preco}`);
} else {
    console.log(`\nNão consegue comprar: ${preco}`);
};

// Menor ou igual

const menig = Math.floor(Math.random(10, 30) * 100);