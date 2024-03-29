// Create an array with with todo
// you have x todos
// print the first and second to last items -> Todo: walk the dog

let todos = [
  "Wake up early morning",
  "eat your breakfas by 8am",
  "get ready for office",
  "check your vehicle everything is okay",
  "fill up the fuel",
];

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

todos.map((items, index) => {
  console.log(`${items}`);
});

// for each loop of array
todos.forEach((items, index) => {
  console.log(items);
});

// for loop in reverse
for (let count = todos.length - 1; count >= 0; count--) {
  const num = count + 1;
  const list = todos[count];
  console.log(num + "." + list);
}

// for loop in reverse
for (let count = 0; count < todos.length; count++) {
  const num = count + 1;
  const list = todos[count];
  console.log(num + "." + list);
}

// 1. Conver array to array of object -> text, complete
// 2. Create function to remove a todo by text value

const todosComplete = [
  {
    text: "Order Food",
    complete: true,
  },
  {
    text: "Do some chores",
    complete: false,
  },
  {
    text: "Exercise",
    complete: true,
  },
  {
    text: "Do work",
    complete: false,
  },
];

const deleteTodo = function (todos, todoText) {
  const index = todos.findIndex(function (todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });

  if (index > -1) {
    todos.splice(index, 1);
  }
};

const showDeletedTodo = function (todo, todoText) {
  const find = todo.find((todo) => {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });

  console.log(find, "deleted find");
  return find;
};

const getThingsTodo = function (todo) {
  const filterTodo = todo.filter(function (checkList) {
    // return checkList.complete !== true;
    // or
    return !checkList.complete;
  });

  return filterTodo;
};

// console.log(getThingsTodo(todosComplete), "filter completed");

// showDeletedTodo(todosComplete, "do work");
// deleteTodo(todosComplete, "do work");
// console.log(todosComplete);

const sortTodo = function (list) {
  list.sort(function (a, b) {
    if (!a.complete && b.complete) {
      return -1;
    } else if (a.complete && !b.complete) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortTodo(todosComplete);
console.log(todosComplete);
