import './style.css';

const arrowButtons = document.querySelector('.arrows');

arrowButtons.addEventListener('click', () => {
  arrowButtons.classList.toggle('active');
});

const List = [
  {
    description: "me",
    completed: true,
    index:  1,
  },
  
];

window.addEventListener('load', () => {
  const ListSection = document.querySelector('.list-elements');

  const createElement = (element) => {
    const elementDiv = document.createElement('div');
    const checkBox = document.createElement('input');
    const task = document.createElement('p');
  

    elementDiv.classList.add('the-elements');

    checkBox.type = 'checkbox';
    checkBox.checked = element.completed;

    task.innerHTML = element.description;

    elementDiv.append(checkBox, task);
    ListSection.appendChild(elementDiv);
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
    index: List.length,
  });
  // localStorage.setItem('List', JSON.stringify(List));
  
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


//delete function 

const deleteButton = document.querySelector(".delete-button");

deleteButton.addEventListener("click", (event) => {
    List.forEach((element, index) =>{
      if (element.completed === true){
        element.completed.parentElement.remove();
        List.splice(index,1);
        console.log(List);
        
      }
    })
})