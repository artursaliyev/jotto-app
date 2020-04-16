import { actionTypes } from "../actions"


export default (state = [], action) => {
    switch (action.type) {
        case actionTypes.GUESS_WORD:
            return [action.payload, ...state];
        default:
            return state;
    }
}