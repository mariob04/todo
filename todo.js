const todoList = {
  tasks: [],

  addTask: function (taskText) {
    this.tasks.push({
      text: taskText,
      completed: false,
    });
    this.render();
  },

  render: function () {
    const todoListElement = document.getElementById("todo-list");
    todoListElement.innerHTML = "";

    this.tasks.forEach((task, index) => {
      const listItem = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;
      checkbox.addEventListener("change", () => this.toggleCompleted(index));

      const taskText = document.createElement("span");
      taskText.textContent = task.text;

      const deleteButton = document.createElement("button");
      deleteButton.className = "deleteBtn";
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => this.deleteTask(index));

      listItem.appendChild(checkbox);
      listItem.appendChild(taskText);
      listItem.appendChild(deleteButton);

      if (task.completed) {
        taskText.classList.add("todoDone");
      }

      todoListElement.appendChild(listItem);
    });
  },

  toggleCompleted: function (index) {
    this.tasks[index].completed = !this.tasks[index].completed;
    this.render();
    listItem.classList;
  },

  deleteTask: function (index) {
    this.tasks.splice(index, 1);
    this.render();
  },
};

function addTask() {
  const newTaskInput = document.getElementById("new-task");
  const newTaskText = newTaskInput.value.trim();

  if (newTaskText !== "") {
    todoList.addTask(newTaskText);
    newTaskInput.value = "";
  }
}

todoList.render();

window.addEventListener("load", todoList.init);
