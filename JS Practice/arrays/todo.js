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

// console.log(`You have ${todos.length} Todos!`);
// console.log(`Todo: ${todos[0]}`);
// console.log(`Todo: ${todos[todos.length - 2]}`);

// Delete the third item
// Add a new item on the end
// Remove the first item from the list

todos.splice(2, 1);
console.log(todos);

todos.push("Carefully drive the care with indications");
console.log(todos);

todos.shift();
console.log(todos);

todos.map((items, index) =>{
    console.log(`${items}`)
})

// for each loop of array
todos.forEach((items, index) => {
    console.log(items);
})

// for loop in reverse
for (let count = todos.length - 1; count >= 0; count-- ) {
    const num = count + 1;
    const list = todos[count]
    console.log(num + "." + list)
}

// for loop in reverse
for (let count = 0; count < todos.length; count++ ) {
    const num = count + 1;
    const list = todos[count]
    console.log(num + "." + list)
}