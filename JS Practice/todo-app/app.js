let todosComplete = getSavedTodos();

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
  todosComplete.push({ text: todoValue, complete: false });
  saveTodo(todosComplete);
  renderTodos(todosComplete, text);
  e.target.elements.todotext.value = "";
});

document
  .querySelector("#hide_complete")
  .addEventListener("change", function (e) {
    text.hideCompleted = e.target.checked;
    renderTodos(todosComplete, text);
  });
