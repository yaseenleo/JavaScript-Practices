const myTodos = ['Buy Bread', 'Go to Gym', 'Record Video'];
console.log(myTodos.indexOf('Buy Bread'));

const newTodos = [
    {
        title: 'Buy Bread',
        isDone: false,
    },
    {
        title: 'Go to Gym',
        isDone: false,
    },
    {
        title: 'Record Video',
        isDone: true,
    }
]

const index = newTodos.findIndex(function(todo, index){
    console.log(todo);
    
    return todo.title == 'Go to Gym'
})
console.log(index);

// Method One
const findTodo = function(myTodos, title){
    const index = myTodos.findIndex(function(todo, index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return myTodos[index]
}

let printMe = findTodo(newTodos, 'Go To gym');
console.log(printMe);

const fintTodo1 = function(myTodos, title){
    const titleReturned = myTodos.find(function(todo, index){
        return todo.title.toLowerCase() === title.toLowerCase()
    });
    return titleReturned
}

let printMe1 = fintTodo1(newTodos, 'Go To gym');
console.log(printMe1);
