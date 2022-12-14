// Create an array with with todo
// you have x todos
// print the first and second to last items -> Todo: walk the dog

let todos = [
    'Wake up early morning',
    'eat your breakfas by 8am',
    'get ready for office',
    'check your vehicle everything is okay',
    'fill up the fuel'
]

console.log(`You have ${todos.length} Todos!`);
console.log(`Todo: ${todos[0]}`);
console.log(`Todo: ${todos[todos.length - 2]}`);