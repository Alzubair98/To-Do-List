import {
    localStorageTasks,
} from './add_remove.js';
const List = JSON.parse(localStorage.getItem('List')) || [];

let editCheckBox = (ID, event)=>{
    List.forEach((element)=>{
        if(element.index === ID){
            element.completed = event;
        }
        localStorageTasks(List);
    });
}


export {
    editCheckBox
}