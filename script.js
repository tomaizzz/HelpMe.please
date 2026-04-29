// armazenamento em memória (igual definido no escopo)
let tasks = [];

// adicionar tarefa
function addTask() {
    const input = document.getElementById("taskInput");
    let text = input.value.trim();

    // validação basica (importante pro professor ver)
    if (text === "") {
        alert("campo vazio não dá né...");
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

// renderiza lista (atualização dinamica)
function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");

        // texto
        const span = document.createElement("span");
        span.innerText = task.text;
        span.classList.add("task-text");

        // feedback visual
        if (task.completed) {
            span.classList.add("completed");
        }

        // checkbox (marcar como concluida)
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        checkbox.onclick = () => toggleTask(task.id);

        li.appendChild(span);
        li.appendChild(checkbox);

        list.appendChild(li);
    });
}

// alternar estado da tarefa
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