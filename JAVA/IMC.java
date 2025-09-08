public class IMC {
    public static void main(String[] args) {
        double peso = 70;
        double altura = 1.75;
        double imc = peso / (altura * altura);

        System.out.printf("Seu IMC é: %.2f%n", imc);

        if (imc < 18.5)
            System.out.println("Classificação: Abaixo do peso");
        else if (imc < 24.9)
            System.out.println("Classificação: Peso normal");
        else if (imc < 29.9)
            System.out.println("Classificação: Sobrepeso");
        else
            System.out.println("Classificação: Obesidade");
    }
}
