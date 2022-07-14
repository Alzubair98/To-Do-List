import {
  localStorageTasks, renderList,
} from './add_remove.js';

let List = JSON.parse(localStorage.getItem('List')) || [];

const editCheckBox = (ID, event) => {
  List = JSON.parse(localStorage.getItem('List'));
  List.forEach((element) => {
    if (element.index === ID) {
      element.completed = event;
    }
    localStorageTasks(List);
  });
};

const deleteCompleted = () => {
  List = JSON.parse(localStorage.getItem('List'));
  List = List.filter((element) => element.completed === false);

  List.forEach((element, index) => {
    element.index = index + 1;
  });

  localStorage.setItem('List', JSON.stringify(List));

  const ListSection = document.querySelector('.list-elements');
  ListSection.innerHTML = '';
  renderList(List);
};

export {
  editCheckBox, deleteCompleted,
};