let tasks = [];

function addTask() {
    const input = document.getElementById("taskInput");
    let text = input.value.trim();

    // validação simples
    if (text === "") {
        alert("não pode ser vazio né...");
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
        li.innerText = task.text;

        list.appendChild(li);
    });
}