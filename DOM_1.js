//Define UI variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventListeners();


//Load all event listeners
function loadEventListeners() {
    //add task event
    form.addEventListener("submit", addTask);
}

//add Task
function addTask(e) {
    if (taskInput.value === " ") {
        alert("add a task");
    }

    // create list (li) element
    const li = document.createElement("li");
    li.className = "collection-item";
    //create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    e.preventDefault();

}