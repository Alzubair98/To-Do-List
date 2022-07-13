import { addElement, deletetask } from '../src/add_remove.js';

describe('Add, Remove Element Test', () => {
  document.body.innerHTML = '<div class="list-elements"></div>';

  const task = [{ description: 'text', completed: false, index: 1 }];

  test('check add item in the list', () => {
    addElement(task);
    const list = document.querySelectorAll('.list-elements div');
    expect(list).toHaveLength(1);
  });

  test('check the remove from the list', () => {
    const deleteButton = document.querySelectorAll('.delete-icon');
    deletetask(deleteButton[0]);
    const list = document.querySelectorAll('.list-elements div');
    expect(list).toHaveLength(0);
  });
});
