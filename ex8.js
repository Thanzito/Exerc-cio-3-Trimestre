function fatorial(n) {
    if (n < 0) {
        return ("O número deve ser maior ou igual a 0");
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log(fatorial(5)); //saída: 120