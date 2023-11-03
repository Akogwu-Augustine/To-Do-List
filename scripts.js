function addTask() {
    var taskInput = document.getElementById("task");
    var taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    var taskList = document.getElementById("task-list");
    var li = document.createElement("li");
    li.innerHTML = taskText + '<button class="delete-button" onclick="removeTask(this)">Delete</button>';
    taskList.appendChild(li);

    taskInput.value = "";
}

function removeTask(button) {
    var taskList = document.getElementById("task-list");
    var li = button.parentElement;
    taskList.removeChild(li);
}
