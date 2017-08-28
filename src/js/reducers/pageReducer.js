import {
    ADD_PAGE,
    RENAME_PAGE,
    ADD_QUESTION,
    CHANGE_QUESTION_TEXT,
    TOGGLE_REQUIRED_STATUS,
} from '../types/types';
import questionReducer from './questionReducer';

function pageReducer(state = {}, action) {
    switch(action.type) {
        case ADD_PAGE: {
            return {
                id: action.id,
                questions: [],
            }
        }
        case RENAME_PAGE: {
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign({}, state, {
                title: action.newTitle,
            })
        }
        case ADD_QUESTION: {
            return [
                ...state,
                questionReducer(undefined, action),
            ];
        }
        case CHANGE_QUESTION_TEXT:
        case TOGGLE_REQUIRED_STATUS: {
            state.map(question => questionReducer(question, action));
        }
        default: {
            return state;
        }
    }
}

export default pageReducer;