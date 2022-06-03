import { create, lastIndexOf, over } from 'lodash';
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
  listItem.setAttribute('id', todo.index);
  listItem.innerHTML =`
  <input class="check" id="${todo.index}" type="checkbox"/>
  <label for="${todo.index}" class="tick js-tick"></label>
  <span>${todo.description}</span>
  <button class="delete-todo js-delete-todo">
  <i class = "fa-solid fa-trash-can"></i>
  </button>
`;
  list.append(listItem)

  const liElement = document.getElementsByClassName('.list-items');
  const removeBtn = listItem.querySelector('.delete-todo');
  removeBtn.addEventListener('click', (e) => {
    const clickedItem = e.target.parentElement;
    if (clickedItem.classList.contains('js-delete-todo')) {
      removeListElement(clickedItem);
      overWriteLiId()
      overwriteIndex(toDo);
      console.log(liElement)
    }
  });
}

export function removeListElement (btn) {
  const index = Number(btn.parentElement.id * 1);
  console.log(index);
  if (btn.parentElement.id){
    btn.parentElement.remove();
    toDo.splice(index, 1); 
  }
  if (!btn.parentElement.id){
    toDo.splice(0, 1);
  }
  console.log(toDo);
}

const overwriteIndex = (todo) => {
  let index = 1;
  todo.forEach((todo) => {
    todo.index = index;
    index += 1;
    
  });
}

const overWriteLiId = () => {
  let index = 1;
  const list = document.querySelector('.list-here');
  const listItems = list.querySelectorAll('.list-items');
  listItems.forEach((listItem) => {
    listItem.setAttribute('id', index);
    index++;
  });
};



export function setData() {
  const toDo = JSON.stringify(toDo);
  localStorage.setItem('toDo', toDo);
}

export function getData() {
  const toDo = JSON.parse(localStorage.getItem('toDo'));
  return toDo;
}