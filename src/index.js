import './style.css';
import {
  localStorageGet, addElement, deleteElement, editElement,
} from './add_remove.js';

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
    event.target.parentElement.remove();
    const iD = parseInt(event.target.parentElement.getAttribute('div_id'), 10);
    deleteElement(iD);
  }
});

ListSection.addEventListener('click', (event) => {
  if (event.target.classList.contains('task-layout')) {
    const iD = parseInt(event.target.parentElement.getAttribute('div_id'), 10);
    const { value } = event.target;
    editElement(iD, value);
  }
});