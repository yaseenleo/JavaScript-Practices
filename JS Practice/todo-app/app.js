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

// const paragraph = document.querySelectorAll("p");
// paragraph.forEach(function (para) {
//   if (para.textContent.includes("the")) {
//     para.remove();
//   }
// });

// You have 2 todo left (p element)
// Add a p for each todo above (use text value)

const incompleteTodos = todosComplete.filter(function (todo) {
  return !todo.complete;
});

const summary = document.createElement("h2");
summary.textContent = `You have ${incompleteTodos.length} todo's left`;
document.querySelector("body").appendChild(summary);

const todoLeft = todosComplete.forEach(function (task) {
  if (task.complete == false) {
    const taskText = document.createElement("p");
    taskText.textContent = task.text;
    document.querySelector("body").appendChild(taskText);
  }
});

//Listen for new todo creation
const addTodoBtn = document
  .querySelector("#addBtn")
  .addEventListener("click", function (e) {
    console.log("Add todo button is clicked");
  });
