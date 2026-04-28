let tasks = [];

function addTask() {
    const input = document.getElementById("taskInput");
    let text = input.value.trim();

    if (text === "") {
        alert("digita algo ai po");
        return;
    }

    const task = {
        id: Date.now(),
        text: text,
        completed: false
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

        const span = document.createElement("span");
        span.innerText = task.text;

        if (task.completed) {
            span.classList.add("completed");
        }

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        checkbox.onclick = () => toggleTask(task.id);

        li.appendChild(span);
        li.appendChild(checkbox);

        list.appendChild(li);
    });
}

function toggleTask(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return {
                ...task,
                completed: !task.completed
            };
        }
        return task;
    });

    renderTasks();
}