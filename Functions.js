//declaration

function sum(a,b) {
    return a + b;
};
const result = sum(6,4); 
console.log(result);

function plus(a,b) {
    return a * b;
};
const umnozhenie = plus(7,10);
console.log(umnozhenie);

function minus(a,b,c) {
    return a + b - c;
};
const vichitanie = minus(9,10,8);
console.log(vichitanie);

function delenie(a,c) {
    return c / a;
};
const podelil = delenie(90,9);
console.log(podelil)

function word(word1, word2) {
    return word1 + word2;
};
const words = word('Privet',' Andrei')
console.log(words)



//expression
let word = (a,b) => a + b;
alert( word ("Mladshiy"," Leitenant"));