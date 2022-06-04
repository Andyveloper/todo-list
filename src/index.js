import './main.scss';
import { setData, renderList } from './modules/localStorage.js';
import { newTask, saveEdit } from './modules/newTask.js';
import { completed, markAsCompleted } from './modules/completeStatus.js';

export const toDo = [
];

const listContainer = document.querySelector('.list-container');

const createTitle = () => {
  const listTitle = document.createElement('div');
  const listIcon = document.createElement('i');
  const topContainer = document.createElement('li');
  topContainer.classList.add('top-container');
  listIcon.classList.add('fa-solid');
  listIcon.classList.add('fa-arrows-rotate');
  listTitle.classList.add('list-title');
  listTitle.innerHTML = 'To Do List';
  topContainer.append(listTitle, listIcon);
  listContainer.appendChild(topContainer);
};

const createForm = () => {
  const listFormContainer = document.createElement('li');
  const listForm = document.createElement('form');
  const input = document.createElement('input');
  const btn = document.createElement('button');
  const btnIcon = document.createElement('i');
  listFormContainer.classList.add('form-container');
  listForm.classList.add('form');
  btn.setAttribute('type', 'submit');
  btn.setAttribute('title', 'submit-btn');
  btn.classList.add('submit');
  btnIcon.classList.add('fa-solid');
  btnIcon.classList.add('fa-arrow-right-to-bracket');
  input.setAttribute('placeholder', 'Add task...');
  input.classList.add('input');
  listFormContainer.appendChild(listForm);
  btn.appendChild(btnIcon);
  listForm.append(input, btn);
  listContainer.appendChild(listFormContainer);
};
const createUl = () => {
  const listItemContainer = document.createElement('li');
  const listItemSubContainer = document.createElement('ul');
  listItemSubContainer.classList.add('list-here');
  listItemContainer.appendChild(listItemSubContainer);
  listContainer.append(listItemContainer);
};

const sortTasks = () => {
  toDo.sort((a, b) => a.index - b.index);
};

export const removeButton = () => {
  const buttonListContainer = document.createElement('li');
  const buttonContainer = document.createElement('div');
  const removeButton = document.createElement('p');
  buttonContainer.classList.add('clear-button-container');
  removeButton.innerHTML = 'Remove Completed Tasks';
  removeButton.classList.add('clear-button');
  buttonContainer.append(removeButton);
  buttonListContainer.append(buttonContainer);
  listContainer.append(buttonListContainer);
};

createTitle();
createForm();
createUl();
sortTasks();

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.querySelector('.input');
  if (input.value !== '') {
    newTask(input.value.trim());
    input.value = '';
    input.focus();
    console.log(toDo);
  }
  sortTasks();
  setData();
  completed(toDo);
});

window.addEventListener('load', () => {
  renderList();
});
saveEdit();

removeButton();
