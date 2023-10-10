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

const text = {
  searchText: "",
  hideCompleted: false,
};

const renderTodos = function (list, filterText) {
  const filterTodos = list.filter(function (todoList) {
    const searchTextMatch = todoList.text
      .toLowerCase()
      .includes(filterText.searchText.toLowerCase());

    const hideCompletedMatch = !text.hideCompleted || !todoList.complete;

    return searchTextMatch && hideCompletedMatch;
  });

  document.querySelector("#todos").innerHTML = "";

  console.log(filterTodos);

  const incompleteTodos = filterTodos.filter(function (todo) {
    return !todo.complete;
  });

  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} todo's left`;
  document.querySelector("#todos").appendChild(summary);

  filterTodos.forEach(function (task) {
    const taskText = document.createElement("p");
    taskText.textContent = task.text;
    document.querySelector("#todos").appendChild(taskText);
  });
};

renderTodos(todosComplete, text);

//Listen for new todo creation
// const addTodoBtn = document
//   .querySelector("#addBtn")
//   .addEventListener("click", function (e) {
//     console.log("Add todo button is clicked");
//   });

// 1. Setup a div contain for todos
// 2. Setup a filter (searchtext) and wire up a new filter input to change it
// 3. Create a renderTodos function to render and rerender the latest filtered data

// Listen for todo text change
document
  .querySelector("#new_todo_text")
  .addEventListener("input", function (e) {
    console.log(e.target.value);
    text.searchText = e.target.value;
    renderTodos(todosComplete, text);
  });

document.querySelector("#todo_form").addEventListener("submit", function (e) {
  e.preventDefault();

  let todoValue = e.target.elements.todotext.value;
  let todoStatus = e.target.elements.hide_completed.checked;
  todosComplete.push({ text: todoValue, complete: todoStatus });
  renderTodos(todosComplete, text);
  e.target.elements.todotext.value = "";
  console.log(todosComplete, todoStatus);
});

document
  .querySelector("#hide_complete")
  .addEventListener("change", function (e) {
    text.hideCompleted = e.target.checked;
    renderTodos(todosComplete, text);
  });
