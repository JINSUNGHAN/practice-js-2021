const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // JSON.stringify: 텍스트를 단순 string으로 바꿔줌
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    // event.target.parentElemet = li
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");    
    span.innerText = newTodoObj.text;
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    // JSON.parse: stringify를 통해 만든 단순 string으로 바뀐것을 살아있는 string으로 바꿔줌
    toDos = parsedToDos;
    // parsedToDos.forEach(sayHello); 
    //위에 것과 똑같은거(이렇게 쓰면 function 안써도 댐) 
    // parsedToDos.forEach((item) => console.log("this is the turn off", item))
    parsedToDos.forEach(paintToDo);
}