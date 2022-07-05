import _ from 'lodash';
import './style.css';

function component(){
    const element = document.createElement('div');

    // _ is function in the lodash package

    element.innerHTML = _.join(['hello', 'webpack', 'its me'], ' ');
    element.classList.add('hello');

    return element
}

document.body.appendChild(component());



