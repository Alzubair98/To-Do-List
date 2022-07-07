import './style.css';

const arrowButtons = document.querySelector('.arrows');

arrowButtons.addEventListener('click', () => {
  arrowButtons.classList.toggle('active');
});

const List = [
  {
    description: 'go to gym',
    completed: true,
    index: 0,
  },

  {
    description: 'shopping',
    completed: true,
    index: 1,
  },

  {
    description: 'have a good night seelp',
    completed: false,
    index: 2,
  },
];

window.addEventListener('load', () => {
  const ListSection = document.querySelector('.list-elements');

  const createElement = (element) => {
    const elementDiv = document.createElement('div');
    const checkBox = document.createElement('input');
    const task = document.createElement('p');
    const deleteButton = document.createElement('button')

    deleteButton.classList.add("delete-icon")
    deleteButton.innerHTML = "X"

    elementDiv.classList.add('the-elements');

    checkBox.type = 'checkbox';
    checkBox.checked = element.completed;

    task.innerHTML = element.description;

    elementDiv.append(checkBox, task, deleteButton);
    ListSection.append(elementDiv);
  };

  List.forEach((element) => {
    createElement(element);
  });
});
