import { toDo } from '../index.js';
import { createListElement } from '../modules/newTask.js';

export function setData() {
  const storagedData = JSON.stringify(toDo);
  localStorage.setItem('toDo', storagedData);
}

export function getData() {
  const savedData = JSON.parse(localStorage.getItem('toDo'));
  return savedData;
}


export const renderList = () => {
  const loadData = getData();
  loadData.forEach(data => {
    createListElement(data)
  })
}