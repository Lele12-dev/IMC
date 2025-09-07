def calcular_imc(peso, altura):
    imc = peso / (altura ** 2)
    return imc

peso = 70
altura = 1.75
imc = calcular_imc(peso, altura)
print(f"Seu IMC é: {imc:.2f}")

if imc < 18.5:
    print("Classificação: Abaixo do peso")
elif imc < 24.9:
    print("Classificação: Peso normal")
elif imc < 29.9:
    print("Classificação: Sobrepeso")
else:
    print("Classificação: Obesidade")
