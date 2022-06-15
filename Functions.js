//declaration

// function sum(a,b) {
//     return a + b;
// };
// const result = sum(6,4); 
// console.log(result);

// function plus(a,b) {
//     return a * b;
// };
// const umnozhenie = plus(7,10);
// console.log(umnozhenie);

// function minus(a,b,c) {
//     return a + b - c;
// };
// const vichitanie = minus(9,10,8);
// console.log(vichitanie);

// function delenie(a,c) {
//     return c / a;
// };
// const podelil = delenie(90,9);
// console.log(podelil)

// function word(word1, word2) {
//     return word1 + word2;
// };
// const words = word('Privet',' Andrei')
// console.log(words)



// //expression
// let word = (a,b) => a + b;
// alert( word ("Mladshiy"," Leitenant"));

const a = 5;
const b = 4;
const result = a > b
console.log(result) // true

const pineapple = 'ананас';
const apple = 'яблоко';
const result1 = pineapple > apple;
console.log(result1) // false

const c = '2';
const d = '12';
const result2 = c > d;
console.log(result2); // true

const und = undefined;
const nu = null;
const result3 = und == nu;
console.log(result3); // true

const defined = undefined;
const ll = null;
const result4 = defined === ll;
console.log(result4); // false

const zero = null;
const hz = "\n0\n";
const result5 = zero == hz;
console.log(result5); // false

const nol = null;
const na = +"\n0\n";
const result6 = nol === na;
console.log(result6); // false


const day = "1930";
if (day == "morning") {
    console.log('Ешь бутерброд,и хуярь на любимую работу')
} else if (day == "noon") {
    console.log("Пора обедать! Кушай борщ и возвращайся на любимую работу")
} else if (day == "evening") {
    console.log("Вернулся с любимой работы,мой жопу, иди ужинать!")
} else if (day == "night") {
    console.log("Включи сериал, и засыпай! Завтра на любимую работу!")
} else {
    console.log("Нечем заняться? Иди поешь!")
}