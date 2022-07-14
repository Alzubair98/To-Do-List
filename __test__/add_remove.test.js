import { addElement, deletetask, deleteElement } from '../src/add_remove.js';

describe('Add, Remove Element Test', () => {
  // mock the html
  document.body.innerHTML = '<div class="list-elements"></div>';

  const task = { description: 'text', completed: false, index: 1 };
  // test the add to the html and to the local storage
  test('check add item in the list', () => {
    addElement(task);
    const list = document.querySelectorAll('.list-elements div');
    expect(list).toHaveLength(1);
    expect(JSON.parse(localStorage.getItem('List'))).toHaveLength(1);
  });

  // check the remove from the html
  test('check the remove from the list', () => {
    const deleteButton = document.querySelectorAll('.delete-icon');
    deletetask(deleteButton[0]);
    const list = document.querySelectorAll('.list-elements div');
    expect(list).toHaveLength(0);
  });
  // check the remove from the localStorage
  test('check the remove from the localStorage', () => {
    deleteElement(1);
    expect(JSON.parse(localStorage.getItem('List'))).toHaveLength(0);
  });
  // check the remove from the local Storage , add 3 tasks and remove one
  // the local storage is mocked using package called jest-localstorage-mock
  test('check the remove from the localStorage', () => {
    const tasks = [{ description: 'text', completed: false, index: 1 },
      { description: 'two', completed: false, index: 2 },
      { description: 'three', completed: false, index: 3 }];
    localStorage.setItem('List', JSON.stringify(tasks));
    deleteElement(1);
    expect(JSON.parse(localStorage.getItem('List'))).toHaveLength(2);
  });
});
