import { toDo } from '../index.js';


export const markAsCompleted = (todo, listItem, index) => {
console.log('hello world');
  todo.completed = !todo.completed;
  listItem.classList.toggle('done');
}



export const completed = (todo) => {
  const completedTasks = todo.filter(task => task.completed === true);
  console.log(`this is ${completedTasks}`);
  // todo.completedTasks.remove();
}
