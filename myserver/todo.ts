class Todo {
  newtasks: any = 0;
  completed: any = 0;
  inProgress: any = 0;
  todos = [];
  constructor(todolist: any[]) {
    this.todos = todolist;
  }
  displayTasks() {
    this.newtasks = this.todos.filter((task) => task.status == "new").length;
    //   let newtasks: any = this.newtasks;
    document.querySelector(
      "#currentStatus span:first-child"
    ).innerHTML = this.newtasks;

    this.inProgress = this.todos.filter(
      (task) => task.status == "inprogress"
    ).length;
    document.querySelector(
      "#currentStatus span:last-child"
    ).innerHTML = this.inProgress;

    this.completed = this.todos.filter(
      (task) => task.status == "completed"
    ).length;
    document.querySelector(
      "#currentStatus span:nth-child(2)"
    ).innerHTML = this.completed;

    let tasksHtml = "";
    this.todos.forEach((task) => {
      tasksHtml += `<li>${task.name} => ${task.status}
                    <button onclick="todo.buttonEvent('${task.status}', '${task.name}', 'progress')">In progress</button>
                    <button onclick="todo.buttonEvent('${task.status}','${task.name}', 'complete')">Complete</button>
                    </li>`;
    });
    document.getElementById("tasklist").innerHTML = tasksHtml;
  }
  addTask() {
    let task = document.getElementById("newtask").value;
    let taskobj = { name: task, status: "new" };
    this.todos.push(taskobj);
    this.displayTasks();
  }
  buttonEvent(status, name, reqstatus) {
    let index = this.todos.findIndex((task) => task.name == name);
    if (status == "inprogress" && reqstatus == "complete") {
      this.todos[index].status = "completed";
    }
    if (status == "new" && reqstatus == "progress") {
      this.todos[index].status = "inprogress";
    }
    this.displayTasks();
  }
}
