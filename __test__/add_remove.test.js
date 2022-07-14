import {
  addElement, deletetask, deleteElement, editElement,
} from '../src/add_remove.js';
import { editCheckBox, deleteCompleted } from '../src/completed.js';

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

  // Part 2
  // check for updating an item 'completed'status
  test('check the edit check box', () => {
    const event = false;
    const id = 1;
    editCheckBox(id, event);
    expect(JSON.parse(localStorage.getItem('List'))[0].completed).toBeFalsy();
    // another test
    const secondEvent = true;
    editCheckBox(id, secondEvent);
    expect(JSON.parse(localStorage.getItem('List'))[0].completed).toBeTruthy();
  });
  // test the clear all funtion

  test('check clear all completed function', () => {
    const tasks = [{ description: 'text', completed: true, index: 1 },
      { description: 'two', completed: false, index: 2 },
      { description: 'three', completed: false, index: 3 }];

    localStorage.setItem('List', JSON.stringify(tasks));
    deleteCompleted();
    expect(JSON.parse(localStorage.getItem('List'))).toHaveLength(2);

    // second test
    const secondTasks = [{ description: 'text', completed: false, index: 1 },
      { description: 'two', completed: false, index: 2 },
      { description: 'three', completed: false, index: 3 }];

    localStorage.setItem('List', JSON.stringify(secondTasks));
    deleteCompleted();
    expect(JSON.parse(localStorage.getItem('List'))).toHaveLength(3);
  });

  // test the edit task function
  test('check the function for editing the task description', () => {
    const task = [{ description: 'text', completed: true, index: 1 }];
    localStorage.setItem('List', JSON.stringify(task));
    const value = 'not text';
    const id = 1;
    editElement(id, value);
    expect(JSON.parse(localStorage.getItem('List'))[0].description).toBe('not text');

    // another test
    const secondValue = 'say my name';
    editElement(id, secondValue);
    expect(JSON.parse(localStorage.getItem('List'))[0].description).toBe('say my name');
  });
});
