function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}


const peso = 70;  
const altura = 1.75; 

const imc = calcularIMC(peso, altura);
console.log(`Seu IMC é: ${imc.toFixed(2)}`);


if (imc < 18.5) {
    console.log("Classificação: Abaixo do peso");
} else if (imc < 25) {
    console.log("Classificação: Peso normal");
} else if (imc < 30) {
    console.log("Classificação: Sobrepeso");
} else if (imc < 35) {
    console.log("Classificação: Obesidade grau I");
} else if (imc < 40) {
    console.log("Classificação: Obesidade grau II");
} else {
    console.log("Classificação: Obesidade grau III");
}
