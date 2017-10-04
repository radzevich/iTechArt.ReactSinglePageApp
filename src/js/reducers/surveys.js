import pageReducer from './pageReducer';
import {
    ADD_SURVEY,
    SAVE_CHANGES_IN_SURVEY,
    ADD_PAGE,
    RENAME_PAGE,
    ADD_QUESTION,
    CHANGE_QUESTION_TEXT,
    TOGGLE_REQUIRED_STATUS,
} from '../types/types';

function surveys(state = {}, action) {
    switch (action.type) {
        case ADD_SURVEY: 
            return {
                id: action.id,
                isAnon: true,
                showQuestionNums: true,
                showPageNums: true,
                isQuestionOrderRandom: false,
                showRequiredQuestionsMarks: false,
                showProgressBar: true,
                pages: [],
            }
        case SAVE_CHANGES_IN_SURVEY: {
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign(...state, action.newState);
        }
        
        case ADD_PAGE: 
            return Object.assign({}, state, {
                pages: [
                    ...state.pages,
                    pageReducer(undefined, action),
                ]
            })
        case RENAME_PAGE:
        case ADD_QUESTION:
        case CHANGE_QUESTION_TEXT:
        case TOGGLE_REQUIRED_STATUS: 
            return state.map(page => pageReducer(state, action));
        default:
            return state;
    }
}

export default surveys;