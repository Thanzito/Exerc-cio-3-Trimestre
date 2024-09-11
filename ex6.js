function calculadora(num1, num2, operacao) {
    switch (operacao) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
          return num1 / num2;
        default:
        return "Operação inválida";
    }
}

console.log(calculadora(5, 3, '+')); //8
console.log(calculadora(5, 3, '-')); //2
console.log(calculadora(5, 3, '*')); //15
console.log(calculadora(5, 3, '/')); //1,66