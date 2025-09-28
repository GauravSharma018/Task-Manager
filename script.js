const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.getElementById("add-btn");
const clearAllBtn = document.getElementById("clear-all-btn");

/**
 * Adds a new task to the list.
 */
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Times symbol for delete
        li.appendChild(span);
    }
    inputBox.value = ""; // Clear the input box
    saveTasks(); // Save the updated list to localStorage
}

// Add task when the "Add" button is clicked
addBtn.addEventListener("click", addTask);

// Add task when Enter key is pressed in the input box
inputBox.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});


// Handle clicks on the list container for completing or deleting tasks
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTasks();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTasks();
    }
}, false);

/**
 * Saves all current tasks and their completion state to localStorage.
 */
function saveTasks() {
    localStorage.setItem("tasksData", listContainer.innerHTML);
}

/**
 * Loads tasks from localStorage when the page is loaded.
 */
function loadTasks() {
    const savedData = localStorage.getItem("tasksData");
    if (savedData) {
        listContainer.innerHTML = savedData;
    }
}

/**
 * Clears all tasks from the list and from localStorage.
 */
function clearAllTasks() {
    listContainer.innerHTML = "";
    localStorage.removeItem("tasksData");
}

clearAllBtn.addEventListener("click", clearAllTasks);

// Load any saved tasks when the page loads
loadTasks();
