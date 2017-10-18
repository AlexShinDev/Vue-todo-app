document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el:'#app',
    data: {
      message: "Hey Vue, how's it going?",
      tasks: [
              {task: "Task 1", priority: "10", completed: false},
              {task: "Task 2", priority: "1", completed: false},
              {task: "Task 3", priority: "5", completed: false},
              ],
      newTask: "",
      newTaskPriority: ""
    },
    mounted: function() {

    },
    methods: {
      addTask: function() {
          var taskObject = {
                            task: this.newTask, 
                            priority: this.newTaskPriority, 
                            completed: false
                          };
          this.tasks.push(taskObject);
          this.newTask = "";
          this.newTaskPriority = "";
      },
      completeTask: function(inputTask) {
        inputTask.completed = !inputTask.completed;
      },
      incompleteCounter: function() {
        let counter = 0;
        this.tasks.forEach(function(task) {
          if (task.completed === false) {
            counter++;
          }
          return counter;
        });
      }
    },
    computed: {

    }
  });
});