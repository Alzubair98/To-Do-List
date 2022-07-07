const List = JSON.parse(localStorage.getItem('List')) || [];

const ListSection = document.querySelector('.list-elements');

const createElement = (element) => {
  const elementDiv = document.createElement('div');
  const checkBox = document.createElement('input');
  const task = document.createElement('input');
  const deleteButton = document.createElement('button');

  deleteButton.classList.add('delete-icon');
  deleteButton.innerHTML = 'X';

  elementDiv.classList.add('the-elements');

  checkBox.type = 'checkbox';
  checkBox.checked = element.complete;

  task.value = element.description;
  task.placeholder = 'pleace dont leave empty';
  task.classList.add('task-layout');

  elementDiv.setAttribute('div_id', element.index);
  elementDiv.append(checkBox, task, deleteButton);

  ListSection.appendChild(elementDiv);
};

const addList = (List) => {
  List.forEach((element) => {
    createElement(element);
  });
};

const localStorageTasks = (List) => {
  window.localStorage.setItem('List', JSON.stringify(List));
};

const localStorageGet = () => {
  const theList = window.localStorage.getItem('List');

  if (theList !== null) {
    addList(JSON.parse(theList));
  }

  return theList;
};

// add element

const addElement = (value) => {
  const task = {
    description: value,
    completed: false,
    index: List.length + 1,
  };

  List.push(task);
  localStorageTasks(List);
  createElement(task);
};

// delete element

const deleteElement = (ID) => {
  const theList = JSON.parse(localStorage.getItem('List'));
  theList.splice(ID - 1, 1);
  theList.forEach((element, index) => {
    element.index = index + 1;
  });
  localStorageTasks(theList);

  return theList;
};

// edit elements

const editElement = (ID, value) => {
  const theList = JSON.parse(localStorage.getItem('List'));

  theList.forEach((element) => {
    if (element.index === ID) {
      element.description = value;
    }
    localStorageTasks(theList);
  });
};

export {
  localStorageGet, addElement, deleteElement, editElement,
};