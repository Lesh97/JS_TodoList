const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

saveTodos = () => localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));


deleteTodo = (event) => {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveTodos();
}

paintTodo = (newTodo) => {
    const li = document.createElement("li");
    li.id = newTodo.id;

    const span = document.createElement("span");
    span.innerText = newTodo.text;
    
    const button = document.createElement("button");
    button.innerText = "x"
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
}

handleTodoSubmit = (event) => {
    event.preventDefault();
    const newTodo = toDoInput.value;
    if (newTodo === "") {
        alert("write todos");
    }else {
        toDoInput.value = "";
        const newTodoObj = {
            text : newTodo,
            id : Date.now(),
        };
        toDos.push(newTodoObj);
        paintTodo(newTodoObj);
        saveTodos();
    }
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const getToDos = localStorage.getItem(TODOS_KEY);

if (getToDos !== null) {
    const parsedToDos = JSON.parse(getToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}