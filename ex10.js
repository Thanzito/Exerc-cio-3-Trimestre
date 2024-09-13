function filtrarPares(arr) {
    return arr.filter(num => num % 2 ===0);
}

let numeros = [1, 2, 3, 4, 5, 6];
console.log(filtrarPares(numeros)); // [2, 4, 6]