const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const dimContainer = document.getElementById("dim-container");
const dimPop = document.getElementById("dimmed");

const HIDDEN_CLASSNAME1 = "hidden";
const TODOS_KEY = "todos";

let toDos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}
handleTodoSubmit = (event) => {
  event.preventDefault();
  const newTodo = toDoInput.value;
  if (newTodo === "") {
    dimContainer.style.opacity = 0.8;
    dimPop.classList.remove(HIDDEN_CLASSNAME1);
  } else {
    toDoInput.value = "";
    const newTodoObj = {
      text: newTodo,
      id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
  }
};

handlePopClick = (event) => {
  dimPop.classList.add(HIDDEN_CLASSNAME1);
  dimContainer.style.opacity = 0;
};

toDoForm.addEventListener("click", handlePopClick);
dimContainer.addEventListener("click", handlePopClick);
toDoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}
