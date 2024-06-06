const input = document.getElementById("input-task");
const button = document.getElementById("btn");
const list = document.querySelector(".todo-list");

button.addEventListener(`click`, () => {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    li.innerText = input.value;
    li.className = "todo-list-item"
    list.appendChild(li);
    li.appendChild(deleteBtn);
    deleteBtn.innerText ="Delete"

})