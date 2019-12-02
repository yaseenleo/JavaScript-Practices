// const sayHello = function(name) {
//     return "Hey there, " + name + "!";
// }

// console.log(sayHello("Sammy"))

const sayHello = (name) => {
    return `Hey there ${name} !`
}

console.log(sayHello("Sammy"))


const sayHello1 = (name) => `Hey there ${name} !`
console.log(sayHello1("Affan"));

const todos = [{
    title: "Buy Food",
    isDone: true,
}, {
    title: "Go to Gym",
    isDone: true,
}, {
    title: "Record Video",
    isDone: false,
}]

const thingsDone = todos.filter((todo) => todo.isDone === true)
console.log(thingsDone);

const lists = [{
    title: "Brush Your Teeth",
    isDone: true,
},
{
    title: "Eat Break Fast",
    isDone: false,
},
{
    title: "Go to School",
    isDone: true,
},
{
    title: "Study Hard",
    isDone: false,
},
{
    title: "Eat Dinner",
    isDone: true,
},
{
    title: "Go to Tuition",
    isDone: false,
}]

// const listNotDone = lists.filter((list) => {
//     if (list.isDone === false) {
//         return `${list.title} is not done`
//     }
//     return lists
// })

const listNotDone = lists.filter((list) => {
    if (list.isDone === false) {
        console.log(`${list.title} is not done`)
    }
} )
