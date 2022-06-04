import { toDo } from '../index.js';
import { setData } from './localStorage.js';


export const markAsCompleted = (todo, listItem) => {
console.log('hello world');
  listItem.classList.toggle('done');
  for (let i = 0; i < todo.length; i++) {
  if (todo[i].index === Number(listItem.id)) {
    todo[i].completed = false;
  } 
  if (todo[i].index === Number(listItem.id) && listItem.classList.contains('done')) {
    todo[i].completed = true;
  }
  setData();
}
};


export const completed = (todo) => {
  const completedTasks = todo.filter(task => task.completed === false);
  localStorage.setItem('toDo', JSON.stringify(completedTasks));
}
