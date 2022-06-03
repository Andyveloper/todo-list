import { create } from 'lodash';
import { toDo } from '../index.js'

export const newTask = (text) => {
  const todo = {
    description: text,
    completed: false,
    index: toDo.length + 1,
  }
  toDo.push(todo)
  createListElement(todo)
};

export function createListElement(todo) {
  const list = document.querySelector('.list-here');
  const isCompleted = todo.completed ? 'done' : '';
  const listItem = document.createElement('li');
  listItem.setAttribute('class', `list-item${isCompleted}`);
  listItem.classList.add('list-items');
  listItem.setAttribute('data-key', todo.index);
  listItem.innerHTML =`
  <input class="check" id="${todo.index}" type="checkbox"/>
  <label for="${todo.index}" class="tick js-tick"></label>
  <span>${todo.description}</span>
  <button class="delete-todo js-delete-todo">
  <i class = "fa-solid fa-trash-can"></i>
  </button>
`;
  list.append(listItem)

}

export function removeListElement (todo) {
  const item = document.querySelector(`[data-key='${todo.index}']`);
  // console.log(item);
  for (let i = 0; i < toDo.length; i++) {
    if (todo.index === toDo[i + 1]) {
      toDo.splice(i, 1);
    }
    if (todo.index === toDo[i + 1]) {
      // item.remove();
    }
  }
}


export function localStorage() {
  const toDo = JSON.stringify(toDo);
  localStorage.setItem('toDo', toDo);
}