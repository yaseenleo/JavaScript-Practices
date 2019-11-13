console.log( 2 === 2.0, '2 === 2.0');
console.log('' == '');

let myVar = '';
let myVarTwo = '';

console.log(myVar == myVarTwo, 'myVar == myVarTwo');
console.log(myVar === myVarTwo, 'myVar === myVarTwo');

let myVarO = {};
let myVarTwoO = {};

console.log(myVarO == myVarTwoO, 'myVarO == myVarTwoO');
console.log(myVarO === myVarTwoO, 'myVarO === myVarTwoO');

let myVarO1 = {};
let myVarTwoO1 = myVarO1;

console.log(myVarO1 == myVarTwoO1, 'myVarO1 == myVarTwoO1');
console.log(myVarO1 === myVarTwoO1, 'myVarO1 === myVarTwoO1');

console.log({} === {}, '{} === {}');
