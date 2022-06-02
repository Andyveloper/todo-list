import './main.scss'
import _ from 'lodash';

const toDo = [
  {
    description: 'Learn JavaScript',
    completed: false,
    index: 3,
  },
  {
    description: 'Learn how to use lodash',
    docompleted: false,
    index: 2,
  },
  {
    description: 'Learn how to use webpack',
    completed: false,
    index: 1,
  },
  {
    description: 'Learn how to cook',
    completed: false,
    index:4,
  }
]
const listContainer = document.querySelector('.list-container');

const createTitle = () => {
  const listTitle = document.createElement('li');
  const listIcon = document.createElement('i');
  const topContainer = document.createElement('div');
  topContainer.classList.add('top-container')
  listIcon.classList.add('fa-solid');
  listIcon.classList.add('fa-arrows-rotate')
  listTitle.classList.add('list-title');
  listTitle.innerHTML = 'To Do List';
  topContainer.append(listTitle, listIcon);
  listContainer.appendChild(topContainer);
};

const createForm = () => {
  const listForm = document.createElement('form');
  const input = document.createElement('input');
  const btn = document.createElement('i')
  listForm.classList.add('form');
  btn.classList.add('fa-solid')
  btn.classList.add('fa-arrow-right-to-bracket')
  input.setAttribute('placeholder', 'Add task...');
  input.classList.add('input')
  listForm.append(input, btn);
  listContainer.appendChild(listForm);
}

const sortTasks = () => {
  toDo.sort((a, b) => a.index - b.index);
};


const createList = () => {
  for (let i = 0; i < toDo.length; i++) {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('div');
    listItem.innerHTML = toDo[i].description;
    listItem.classList.add('list-item');
    listItem.insertAdjacentElement('afterbegin', checkbox);
    checkbox.classList.add('checkbox');
    listContainer.append(listItem);
  }
}


const removeButton = () => {
  const buttonContainer = document.createElement('div');
  const removeButton = document.createElement('p');
  buttonContainer.classList.add('clear-button-container');
  removeButton.innerHTML = 'Remove Completed Tasks';
  removeButton.classList.add('clear-button');
  buttonContainer.append(removeButton);
  listContainer.append(buttonContainer);
}




createTitle();
createForm();
sortTasks();
createList();
removeButton();




