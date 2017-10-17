document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el:'#app',
    data: {
      message: "Hey Vue, how's it going?",
      tasks: [
              {task: "Task 1", priority: "high"},
              {task: "Task 2", priority: "low"},
              {task: "Task 3", priority: "medium"},
              ],
      newTask: "",
      newTaskPriority: ""
    },
    mounted: function() {

    },
    methods: {
      addTask: function() {
        if (this.newTask && this.newTaskPriority) {
          this.newTask = "Error Blank, put something down.";
        } else {
          var taskObject = {"task": this.newTask, "priority": this.newTaskPriority};
          this.tasks << taskObject;
          this.newTask = "";
          this.newTaskPriority = "";
        }
      },
      taskComplete: function(inputTask) {
        let index = this.tasks.indexOf(inputTask);
        this.tasks.splice(index,1);
      }
    },
    computed: {

    }
  });
});