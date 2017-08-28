import {
    ADD_QUESTION,
    CHANGE_QUESTION_TEXT,
    TOGGLE_REQUIRED_STATUS,
    DEFAULT_QUESTION_TYPE,
} from '../types/types';

function questionReducer(state = {}, action) {
    switch (action.type) {
        case ADD_QUESTION: 
            return {
                id: action.id,
                type: DEFAULT_QUESTION_TYPE,
                isRequired: false,
            }
        case CHANGE_QUESTION_TEXT:
            if (action.id !== state.id) {
                return state;
            }
            return Object.assign({}, state, {
                text: action.textToChange,
            });
        case TOGGLE_REQUIRED_STATUS:
            if (action.id !== state.id) {
                return state;
            }
            return Object.assign({}, state, {
                isRequired: !state.isRequired,
            });
        default: 
            return state;
    }
}

export default questionReducer;