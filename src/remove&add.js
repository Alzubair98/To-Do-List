
let List = JSON.parse(localStorage.getItem('List')) || [];

const addList = (List) =>{
  const listcont = document.querySelector('.the-elements');

  let listTemplate = '';

  List.forEach((element) =>{
    const taskHTML = `<li class="task" task-id="${element.id}">
    <div><input type="checkbox"/> <input class="edit" type="text" placeholder="Add Task" value = "${element.title}" /></div>
    <i class="fa-solid fa-trash-can del"></i>
    </li>`;

  listTemplate += taskHTML;
  });
  listcont.innerHTML = listTemplate;
}

// add the tasks to the local storage 

const localStorageTasks = (List) => {
  window.localStorage.setItem('List', JSON.stringify(List));
 
};

// get the list form the local storage 

const localStorageGet = () =>{
  const theList = window.localStorage.getItem('List');
  
  if (theList !== null) {
    addList(JSON.parse(theList));
  };
};

// delete element
const deleteElement = (ID) => {
  if (List !== null) {
    List = List.filter((element) => element.id !== +ID);
    List.forEach((event, index)=> {
      event.id = index + 1;
    });
    localStorageTasks(List);
    addList(List);
  };
  return List;
};

// add element 

const addelement = (description) => {

  const task = {
    id: List.length + 1,
    title: description,
    completed: false,
  };

  List.push(task);

  localStorageTasks(List);
  addList(List);

};

const editList = (ID , event) => {
  List.forEach((element) => {
    if(element.id === +ID){
      const index = List.indexOf(element);
      element.title = event;
      List[index] = element;
    }
  });
  localStorageTasks(List);
};

export { 
  addelement, addList, localStorageGet, deleteElement, editList
};