import './style.css';
import { localStorageGet, addElement, deleteElement } from './add_remove';

const arrowButtons = document.querySelector('.arrows');

arrowButtons.addEventListener('click', () => {
  arrowButtons.classList.toggle('active');
});

const addbutton = document.querySelector(".add-button");
const theInput = document.querySelector(".input-bar");
const ListSection = document.querySelector('.list-elements');


localStorageGet();

// adding to list
addbutton.addEventListener('click', ()=>{
  if(theInput.value !== ""){
    addElement(theInput.value);
    theInput.value = '';
  }
});

theInput.addEventListener('keydown', (evnet)=>{
  if(evnet.key === "Enter"){
    addbutton.click();
  }
} )

// delete from the list

ListSection.addEventListener('click', (event) => {
  if(event.target.classList.contains('delete-icon')){
    event.target.parentElement.remove();
    
    const ID = parseInt(event.target.parentElement.getAttribute('div_id'));
    console.log(ID)
    deleteElement(ID);
    
  }
});