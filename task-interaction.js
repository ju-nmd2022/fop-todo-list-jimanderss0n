const toDoListElement = document.getElementById("tasks");
let taskList = [];

function clickHandler() {
  const inputElement = document.getElementById("taskInput");
  taskList.push(inputElement.value);
  taskHandler();
}

function taskHandler() {
  toDoListElement.innerHTML = "";
  for (let task of taskList) {
    const taskElement = document.createElement("span");
    taskElement.innerText = task;
    toDoListElement.appendChild(taskElement);

    const removeButtonElement = document.createElement("button");
    removeButtonElement.innerText = "Remove";
    toDoListElement.appendChild(removeButtonElement);
    removeButtonElement.classList.add("remove");

    const doneButtonElement = document.createElement("button");
    doneButtonElement.innerText = "Completed";
    toDoListElement.appendChild(doneButtonElement);
    doneButtonElement.classList.add("done");

    const index = taskList.indexOf(task);
    removeButtonElement.addEventListener("click", () => {
      taskList.splice(index, 1);
      taskHandler();
    });
  }
}

const inputElement = document.getElementById("taskInput");
//const addTaskElement = document.getElementById("addTask");

function loadHandler() {
  const button = document.getElementById("addTaskButton");
  button.addEventListener("click", clickHandler);

  //button.onclick = addTask;
}

function addTask() {
  taskInput.innerHTML = "";
  if (taskList) {
    taskInput.innerHTML = inputElement.value;
  }
}

/*const inputValue = inputElement.value;
toDoListElement.innerHTML = inputValue;*/

window.addEventListener("load", loadHandler);
