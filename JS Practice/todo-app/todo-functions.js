const getSavedTodos = () => {
  const todoJSON = localStorage.getItem("todoform");
  if (todoJSON !== null) {
    return JSON.parse(todoJSON);
  } else {
    return [];
  }
};

const saveTodo = (todo) => {
  localStorage.setItem("todoform", JSON.stringify(todo));
};

const generateTodoDOM = (todo) => {
  const todoText = document.createElement("p");
  todoText.textContent = todo.text;
  return todoText;
};

const generateSummaryDOM = (list) => {
  const summary = document.createElement("h2");
  summary.textContent = `You have ${list.length} todo's left`;
  document.querySelector("#todos").appendChild(summary);
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

  const incompleteTodos = filterTodos.filter(function (todo) {
    return !todo.complete;
  });

  generateSummaryDOM(incompleteTodos);

  filterTodos.forEach(function (task) {
    document.querySelector("#todos").appendChild(generateTodoDOM(task));
  });
};
