const inputElement = document.getElementById("taskInput");
const toDoListElement = document.getElementById("tasks");
const button = document.getElementById("addTaskButton");
let taskList = [];

let saveJSON;

function saveToLocal() {
  saveJSON = JSON.stringify(taskList);
  localStorage.tasks = saveJSON;
}

if (localStorage.tasks) {
  taskList = JSON.parse(localStorage.tasks);
}

button.addEventListener("click", () => {
  taskList.push(inputElement.value);
  taskHandler();
  saveToLocal();
});

function taskHandler() {
  toDoListElement.innerHTML = "";
  for (let task of taskList) {
    const taskElement = document.createElement("span");
    taskElement.innerText = task;
    toDoListElement.appendChild(taskElement);

    const removeButtonElement = document.createElement("button");
    removeButtonElement.innerText = "Remove";
    taskElement.appendChild(removeButtonElement);
    removeButtonElement.classList.add("remove");

    const index = taskList.indexOf(task);
    removeButtonElement.addEventListener("click", () => {
      taskList.splice(index, 1);
      taskHandler();

      saveToLocal();
    });

    const doneButtonElement = document.createElement("button");
    doneButtonElement.innerText = "Completed";
    taskElement.appendChild(doneButtonElement);
    doneButtonElement.classList.add("done");

    //ChatGPT Below
    doneButtonElement.addEventListener("click", function () {
      taskElement.style.textDecoration = "line-through";

      // Save the line-through style to localStorage
      localStorage.setItem("toDoListStyle", "line-through");
    });

    // Retrieve the line-through style from localStorage on page load
    const toDoListStyle = localStorage.getItem("toDoListStyle");
    if (toDoListStyle) {
      taskElement.style.textDecoration = toDoListStyle;
    }
  }
}
taskHandler();
