import {increments,decrements} from './../Constants/Constants.js'

export const increment = (value) => {
    const action = {
        type:increments,
        payload:value
    }
    return action;
}

export const decrement = (value) => {
    const action = {
        type:decrements,
        payload:value
    }
    return action;
}