function verificaPalindromo(str) {
    let strReversa = str.split('').reverse().join('');
    return str === strReversa;
}

console.log(verificaPalindromo("ana")); //true
console.log(verificaPalindromo("nathan")); //false