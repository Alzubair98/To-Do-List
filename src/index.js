import './style.css';
import {
  localStorageGet, addElement, deleteElement, editElement, deletetask,
} from './add_remove.js';
import { editCheckBox, deleteCompleted } from './completed.js';

const arrowButtons = document.querySelector('.arrows');

arrowButtons.addEventListener('click', () => {
  arrowButtons.classList.toggle('active');
});

const addbutton = document.querySelector('.add-button');
const theInput = document.querySelector('.input-bar');
const ListSection = document.querySelector('.list-elements');

localStorageGet();

// adding to list
addbutton.addEventListener('click', () => {
  if (theInput.value !== '') {
    addElement(theInput.value);
    theInput.value = '';
  }
});

theInput.addEventListener('keydown', (evnet) => {
  if (evnet.key === 'Enter') {
    addbutton.click();
  }
});

// delete from the list

ListSection.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-icon')) {
    const item = event.target;
    deletetask(item);
    const iD = parseInt(event.target.parentElement.getAttribute('div_id'), 10);
    deleteElement(iD);
  }
});

// edit the element in list

ListSection.addEventListener('click', (event) => {
  if (event.target.classList.contains('task-layout')) {
    const iD = parseInt(event.target.parentElement.getAttribute('div_id'), 10);
    const { value } = event.target;
    editElement(iD, value);
  }
});

ListSection.addEventListener('keydown', (event) => {
  if (event.target.classList.contains('task-layout')) {
    const iD = parseInt(event.target.parentElement.getAttribute('div_id'), 10);
    const { value } = event.target;
    editElement(iD, value);
  }
});

ListSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('the-checkbox')) {
    const checkBox = e.target;
    const ID = parseInt(e.target.parentElement.getAttribute('div_id'), 10);
    editCheckBox(ID, checkBox.checked);
  }
});

// delete All completed tasks

const deleteAllButton = document.querySelector('.delete-button');

deleteAllButton.addEventListener('click', () => {
  deleteCompleted();
});