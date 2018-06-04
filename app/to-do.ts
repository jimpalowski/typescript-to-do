class Task{
  done: boolean = false;

  constructor(public description: string, public priority: string){}
  markDone(){
    this.done = true
  }
}

var tasks: Task[] = [];
tasks.push(new Task('Do the dishes.', 'Medium'));
tasks.push(new Task('Buy chocolate.', 'Low'));
tasks.push(new Task('Do laundry.', 'High'));
tasks.push(new Task('Go for lunch.', 'Low'));
tasks.push(new Task('Time to Sleep', 'Danger'));
console.log(tasks);
tasks[0].markDone();
tasks[3].markDone();

for(var test of tasks){
  console.log(test);
}
