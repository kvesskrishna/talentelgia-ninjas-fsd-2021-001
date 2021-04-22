var Todo = /** @class */ (function () {
    function Todo(todolist) {
        this.newtasks = 0;
        this.completed = 0;
        this.inProgress = 0;
        this.todos = [];
        this.todos = todolist;
    }
    Todo.prototype.displayTasks = function () {
        this.newtasks = this.todos.filter(function (task) { return task.status == "new"; }).length;
        //   let newtasks: any = this.newtasks;
        document.querySelector("#currentStatus span:first-child").innerHTML = this.newtasks;
        this.inProgress = this.todos.filter(function (task) { return task.status == "inprogress"; }).length;
        document.querySelector("#currentStatus span:last-child").innerHTML = this.inProgress;
        this.completed = this.todos.filter(function (task) { return task.status == "completed"; }).length;
        document.querySelector("#currentStatus span:nth-child(2)").innerHTML = this.completed;
        var tasksHtml = "";
        this.todos.forEach(function (task) {
            tasksHtml += "<li>" + task.name + " => " + task.status + "\n                    <button onclick=\"todo.buttonEvent('" + task.status + "', '" + task.name + "', 'progress')\">In progress</button>\n                    <button onclick=\"todo.buttonEvent('" + task.status + "','" + task.name + "', 'complete')\">Complete</button>\n                    </li>";
        });
        document.getElementById("tasklist").innerHTML = tasksHtml;
    };
    Todo.prototype.addTask = function () {
        var task = document.getElementById("newtask").value;
        var taskobj = { name: task, status: "new" };
        this.todos.push(taskobj);
        this.displayTasks();
    };
    Todo.prototype.buttonEvent = function (status, name, reqstatus) {
        var index = this.todos.findIndex(function (task) { return task.name == name; });
        if (status == "inprogress" && reqstatus == "complete") {
            this.todos[index].status = "completed";
        }
        if (status == "new" && reqstatus == "progress") {
            this.todos[index].status = "inprogress";
        }
        this.displayTasks();
    };
    return Todo;
}());
