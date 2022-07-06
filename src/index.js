import './style.css';
import { 
    addelement, addList, localStorageGet, deleteElement, editList,
  } from './remove&add.js';

const arrowButtons = document.querySelector('.arrows');

arrowButtons.addEventListener('click', () => {
  arrowButtons.classList.toggle('active');
});
//////////////////////////////////////////////////////

const addbutton = document.querySelector(".add-button");
const theInput = document.querySelector(".input-bar");
const ListContinar = document.querySelector(".the-elements");

localStorageGet();



addbutton.addEventListener('click', () =>{
    if(theInput.value !== ""){
        addelement(theInput.value);
        theInput.value = '';
    }
});

theInput.addEventListener('keydown', (event) =>{
    if(event.key === "Enter"){
        addbutton.click();
    }
} );

// deleting from the list 

ListContinar.addEventListener('click', (event) => {
    if(event.target.classList.contains('fa-trash-can')){
        event.target.parentElement.remove();
        deleteElement(event.target.parentElement.getAttribute('task-id'))
    }
});


ListContinar.addEventListener('click', (event) => {
    if(event.target.classList.contains('edit')){
        event.target.addEventListener('blur', (e) => {
        if(event.target.value === ''){
            deleteElement(e.target.parentElement.parentElement.getAttribute('task-id'));
            e.target.parentElement.remove();
        }
        else{
            editList(e.target.parentElement.parentElement.getAttribute('task-id'), e.target.value);
        }
        } )
    }
})