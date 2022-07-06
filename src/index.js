import './style.css';

const arrowButtons = document.querySelector('.arrows');

arrowButtons.addEventListener('click', () => {
  arrowButtons.classList.toggle('active');
});

const List = [
  {
    description: "me",
    completed: false,
    index:  1,
  }
];

window.addEventListener('load', () => {
  const ListSection = document.querySelector('.list-elements');

  const createElement = (element) => {
    const elementDiv = document.createElement('div');
    const checkBox = document.createElement('input');
    const task = document.createElement('p');
    const hr = document.createElement('hr');

    elementDiv.classList.add('the-elements');

    checkBox.type = 'checkbox';
    checkBox.checked = element.completed;

    task.innerHTML = element.description;

    elementDiv.append(checkBox, task);
    ListSection.append(hr, elementDiv);
  };


  List.forEach((element) => {
    createElement(element);
  });
  
});



//add function

const InputBar = document.querySelector(".input-bar");
const addButton = document.querySelector(".add-button");


let addElement = (inputTask) =>{
  List.push ({
    description: inputTask,
    completed: false,
    index:  List.length,
  });
}

InputBar.addEventListener("keydown" , (e) => {
  const value = InputBar.value;
  if(e.key === "Enter"){
    addElement(value);
  }
})

addButton.addEventListener("click", ()=>{
  const value = InputBar.value;
  addElement(value);
})


