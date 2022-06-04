import { setData } from './localStorage.js';
import { toDo } from '../index.js';
import { markAsCompleted } from './completeStatus.js';

const overwriteIndex = (todo) => {
  let index = 1;
  todo.forEach((todo) => {
    todo.index = index;
    index += 1;
  });
};

const overWriteLiId = () => {
  let index = 1;
  const list = document.querySelector('.list-here');
  const listItems = list.querySelectorAll('.list-items');
  listItems.forEach((listItem) => {
    listItem.setAttribute('id', index);
    index++;
  });
};

export function removeListElement(btn) {
  let index = Number(btn.parentElement.id > 1);
  console.log(index);
  if (btn.parentElement.id) {
    btn.parentElement.remove();
    toDo.splice(index, 1);
  } else {
    index = Number(btn.parentElement.id - 1);
    btn.parentElement.remove();
    toDo.splice(index, 1);
  }
  console.log(toDo);
}

export function createListElement(todo) {
  const list = document.querySelector('.list-here');
  const isCompleted = todo.completed ? 'done' : '';
  const listItem = document.createElement('li');
  listItem.setAttribute('class', `list-item${isCompleted}`);
  listItem.classList.add('list-items');
  listItem.setAttribute('id', todo.index);
  listItem.innerHTML = `
  <input class="check check${todo.index}" id="${todo.index}" type="checkbox"/>
  <label for="${todo.index}" class="tick js-tick"></label>
  <span id="editable${todo.index}">${todo.description}</span>
  <button class="delete-todo js-delete-todo">
  <i class = "fa-solid fa-trash-can"></i>
  </button>
`;
  list.append(listItem);

  const editable = document.getElementById(`editable${todo.index}`);
  editable.setAttribute('contenteditable', 'true');

  // const liElement = document.getElementsByClassName('.list-items');
  const removeBtn = listItem.querySelector('.delete-todo');
  removeBtn.addEventListener('click', (e) => {
    const clickedItem = e.target.parentElement;
    if (clickedItem.classList.contains('js-delete-todo')) {
      removeListElement(clickedItem);
      overWriteLiId();
      overwriteIndex(toDo);
      setData();
    }
  });

  const checkbox = listItem.querySelector('.check');
  checkbox.addEventListener('change', () => {
    markAsCompleted(toDo, listItem);
    setData();
  });

  const editSpan = listItem.querySelector(`#editable${todo.index}`);
  editSpan.addEventListener('keyup', () => {
    toDo[todo.index - 1].description = editSpan.textContent;
    setData();
  });
}

export const removeCompleted = () => {
  const list = document.querySelector('.list-here');
  const listItems = list.querySelectorAll('.list-items');
  listItems.forEach((listItem) => {
    if (listItem.classList.contains('done')) {
      listItem.remove();
    }
  });
  console.log((toDo));
  setData();
};

export const newTask = (text) => {
  const todo = {
    description: text,
    completed: false,
    index: toDo.length + 1,
  };
  toDo.push(todo);
  createListElement(todo);
};
