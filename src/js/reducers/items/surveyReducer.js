import {
    surveyInitialState,
    pageInitialState,
 } from '../initialState';
import {
    ADD_PAGE,
    TOGGLE_ANON_STATUS,
    TOGGLE_QUESTION_ORDER,
    TOGGLE_SHOW_PAGE_NUMS,
    TOGGLE_SHOW_PROGRESS_BAR,
    TOGGLE_SHOW_QUESTION_NUMS,
    TOGGLE_SHOW_REQUIRED_QUESTION_MARK,
} from '../../types/types';

function surveyReducer(state = surveyInitialState, action) {
    switch (action.type) {
        case TOGGLE_ANON_STATUS:
            return Object.assign(...state, {
                isAnon = !state.isAnon,
            });
        case TOGGLE_SHOW_QUESTION_NUMS:
            return Object.assign(...state, {
                showQuestionNums = !state.showQuestionNums,
            });
        case TOGGLE_SHOW_PAGE_NUMS:
            return Object.assign(...state, {
                showPageNums = !state.showPageNums,
            });
        case TOGGLE_QUESTION_ORDER:
            return Object.assign(...state, {
                isQuestionOrderRandom = !state.isQuestionOrderRandom,
            });
        case TOGGLE_SHOW_REQUIRED_QUESTION_MARK:
            return Object.assign(...state, {
                showRequiredQuestionsMarks = !state.showRequiredQuestionsMarks,
            });
        case TOGGLE_SHOW_PROGRESS_BAR:
            return Object.assign(...state, {
                showProgressBar = !state.showProgressBar,
            });
        case ADD_PAGE: 
            const pageNum = state.pages.length + 1;
            const newPageToAdd = pageInitialState(pageNum);
            return Object.assign({}, state, {
                pages: [
                    ...state.pages,
                    newPageToAdd,
                ]
            })
        default:
            return state;
    }
}

export default surveys;