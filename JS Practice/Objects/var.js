var firstName = "Andrew";

firstName = "Nick";

var firstName = "Jen"

console.log(firstName);

// var is a function scope not a block scope

if (10 === 10){
    var firstName = "kevin"
}
console.log(firstName);

const setName = function(){
    var firstName = "mohsin"
}
setName()
console.log(firstName);