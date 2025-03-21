// Dragula setup
dragula([document.getElementById('pending'), document.getElementById('done')]);

// Function to add a new task
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") return;

    let task = document.createElement("div");
    task.className = "task";
    task.innerText = taskText;

    document.getElementById("pending").appendChild(task);
    taskInput.value = "";
}