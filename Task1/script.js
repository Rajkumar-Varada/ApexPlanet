
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${taskText}
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = ""; // Clear the input field
    }
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskList.removeChild(taskItem);
}


addButton.addEventListener('click', addTask);


taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
