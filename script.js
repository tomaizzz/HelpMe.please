let tasks = [];

function addTask() {
    const input = document.getElementById("taskInput");

    const task = {
        text: input.value
    };

    tasks.push(task);

    input.value = "";

    renderTasks();
}

function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerText = task.text;
        list.appendChild(li);
    });
}