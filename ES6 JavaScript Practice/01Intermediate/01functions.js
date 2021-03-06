// to create a function
// 1. declaration and name the function
// 2. the function itself block of code
// 3. call of function

let sayHello = function(name) {
    console.log("Greeting message for user");
    console.log(`Hey ${name}`);
    
}

sayHello('John') //if we remove the single quote and pass john an error will occur because it expects a string

let fullNameMaker = function(firstName, LastName) {
    console.log("Welcome to TeknoCreate");
    console.log(`Happy to have you, ${firstName} ${LastName}`);
    
    
}

fullNameMaker('John', 'Doe')

let myAdder = function(num1, num2) {
    let added = num1 + num2
    return added
}
let result = myAdder(2,2);
console.log(result);
console.log(myAdder(2,2));

let myMultiplier = function(num1, num2) {
    return num1 * num2
}

let multiply = myMultiplier(3,2);
console.log(multiply);

let guestUser = function(name = 'unName', courseCount = 0){  //these are known as default parameter when you don't pass anything these take over
    return 'Hello ' + name + 'and your course count is: ' + courseCount
}

console.log(guestUser());