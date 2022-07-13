import { addElement, deleteElement } from '../src/add_remove.js';

describe('Add, Remove Element Test', ()=>{
    
    document.body.innerHTML = '<div class="list-elements"></div>';
    const task = [{ description: value, completed: false, index: List.length + 1}];

    test('check one item in the list', ()=>{
      addElement(task);
        const list = document.querySelectorAll('.list-elements div'); 

        expect(list).toHaveLength(1);  
    });
        
});
      
