import * as ToDo from './../Constants/Constants.js'

export const AddToDo = (obj) => {
    console.log('Adding items for toDo',obj);
    const return_value = {
        type:ToDo.AddToDo,
        payload:obj
    } 
    return return_value;
}

export const DeleteToDo = (obj) => {
    console.log('Adding items for toDo',obj);
    const return_value = {
        type:ToDo.DeleteToDo,
        payload:obj
    }
    return return_value;
}