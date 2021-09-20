const input = document.getElementById("input");

// console.log(toString.call(todos));
const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
    todos.forEach(todo => {
        add(todo);
    });
}

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    add();
});


function add(todo) {
    let todoText = input.value;
    //空文字の場合
    if (!todoText) return;

    if (todo) {
        input.value = todo;
    }

    const li = document.createElement("li");
    li.innerText = todoText;
    li.classList.add("list-group-item");
    li.classList.add("my-2");
    document.getElementById("ul").appendChild(li);
    input.value = "";
    saveData();
}

function saveData() {
    const lists = document.querySelectorAll("li");
    // const lists = document.getElementsByTagName("li")
    let todos = []
    lists.forEach(list => {
        todos.push(list.innerText);
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

