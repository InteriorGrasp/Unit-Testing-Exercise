// Basic Math Functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

module.exports = { add, subtract, reverseString };
