import { increments,decrements } from "../Constants/Constants";

const initialState = {
    Count:0
}

export const MainReducer = (state = initialState,action) => {
    switch (action.type) {
        case increments:
            return {
                ...state,
                Count: state.Count + action.payload
            }

        case decrements:
            return {
                ...state,
                Count: state.Count -1
            }
    
        default:
            return state;
    }
}