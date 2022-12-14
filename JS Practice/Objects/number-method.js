let num = 103.941

// to fixed takes single argument number
console.log(num.toFixed(1))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

console.log(Math.random(num))

let min = 10;
let max = 20;
let randomNum = Math.floor(Math.random() * (max - min + 1) + min)
console.log(randomNum, "ran num");

// chalange area
// 1 - 5 - true if match correct - false if not correct

let guessNum = 3;

let guessRandomNum = function (guessNum) {

    let ranNum = Math.floor(Math.random() * (5 - 0 + 1))

    if (ranNum == guessNum) {
        console.log("hurray num match");
    }
    else {
        console.log("sorry number not matched");
        console.log(ranNum, "inner num");
    }
}

guessRandomNum(guessNum);

// or

let makeGuess = function (guess) {
    let min = 1;
    let max = 5;
    let randomNum = Math.floor(Math.random() * (max - min + 1) + min)

    return guess === randomNum
}

console.log(makeGuess(2));