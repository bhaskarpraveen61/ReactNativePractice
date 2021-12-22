import * as toDoConstants from '../Constants/Constants.js'

const initialState = [{
    id: 123,
    value: 'create to-do'
},
{
    id: 234,
    value: 'create-tp-d0-2'
}]

const stateSend = {
    stateValue: initialState,
    Count: 0
}
export const ToDoReducer = (state = stateSend.stateValue, action) => {
    console.log('inside toDoReducer, state before updating', state, action);
    switch (action.type) {
        case toDoConstants.AddToDo:
            const temp_obj = {
                id: Math.random(),
                value: action.payload.value
            }
            const temp_array = [...state, temp_obj];
            console.log('returned values', temp_array, state);
            return temp_array;
        case toDoConstants.DeleteToDo:
            console.log('payload value recieved', action.payload, state);
            const dummyData = [...state];
            dummyData.map((item, index) => {
                if (item.id == action.payload) {
                    console.log('index', index, dummyData.splice(index, 1));
                    dummyData.splice(index, 1);
                }
                else {
                    console.log('y ther are not equal', item.id, index, action.payload);
                }
            })
            console.log('after deletion', dummyData, state);
            return dummyData;

        default:
            return state;
    }
}