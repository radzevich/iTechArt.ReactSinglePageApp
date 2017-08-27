import pageReducer from './pageReducer';
import {
    ADD_SURVEY,
    SAVE_CHANGES_IN_SURVEY,
    TOGGLE_ANON_STATUS,
    TOGGLE_QUESTION_ORDER,
    TOGGLE_SHOW_PAGE_NUMS,
    TOGGLE_SHOW_PROGRESS_BAR,
    TOGGLE_SHOW_QUESTION_NUMS,
    TOGGLE_SHOW_REQUIRED_QUESTION_MARK,
    ADD_PAGE,
    RENAME_PAGE,
    ADD_QUESTION,
    CHANGE_QUESTION_TEXT,
    TOGGLE_REQUIRED_STATUS,
} from '../../types/types';

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
        case TOGGLE_ANON_STATUS:
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign(...state, {
                isAnon: !state.isAnon,
            });
        case TOGGLE_SHOW_QUESTION_NUMS:
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign(...state, {
                showQuestionNums: !state.showQuestionNums,
            });
        case TOGGLE_SHOW_PAGE_NUMS:
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign(...state, {
                showPageNums: !state.showPageNums,
            });
        case TOGGLE_QUESTION_ORDER:
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign(...state, {
                isQuestionOrderRandom: !state.isQuestionOrderRandom,
            });
        case TOGGLE_SHOW_REQUIRED_QUESTION_MARK:
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign(...state, {
                showRequiredQuestionsMarks: !state.showRequiredQuestionsMarks,
            });
        case TOGGLE_SHOW_PROGRESS_BAR:
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign(...state, {
                showProgressBar: !state.showProgressBar,
            });
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