import {
    CREATE_SURVEY,
    TOGGLE_ANON_STATUS,
    TOGGLE_QUESTION_ORDER,
    TOGGLE_SHOW_PAGE_NUMS,
    TOGGLE_SHOW_PROGRESS_BAR,
    TOGGLE_SHOW_QUESTION_NUMS,
    TOGGLE_SHOW_REQUIRED_QUESTION_MARK,
    CREATE_PAGE,
    ADD_PAGE,
} from  '../types/types';
import pageReducer from './pageReducer';

function surveyToCreateReducer(state = {}, action) {
    switch (action.type) {
        case CREATE_SURVEY: 
            const pageToCreate = pageReducer({
                type: action.type,
                id: 1,
            })
            return {
                isAnon: true,
                showQuestionNums: true,
                showPageNums: true,
                isQuestionOrderRandom: false,
                showRequiredQuestionsMarks: false,
                showProgressBar: true,
                pages: [
                    pageToCreate,
                ],
                activePageId: pageToCreate.id,
                pagesCount: 1,
                questionsCount: 0,
            }
        case TOGGLE_ANON_STATUS:
            return Object.assign(...state, {
                isAnon: !state.isAnon,
            });
        case TOGGLE_SHOW_QUESTION_NUMS:
            return Object.assign(...state, {
                showQuestionNums: !state.showQuestionNums,
            });
        case TOGGLE_SHOW_PAGE_NUMS:
            return Object.assign(...state, {
                showPageNums: !state.showPageNums,
            });
        case TOGGLE_QUESTION_ORDER:
            return Object.assign(...state, {
                isQuestionOrderRandom: !state.isQuestionOrderRandom,
            });
        case TOGGLE_SHOW_REQUIRED_QUESTION_MARK:
            return Object.assign(...state, {
                showRequiredQuestionsMarks: !state.showRequiredQuestionsMarks,
            });
        case TOGGLE_SHOW_PROGRESS_BAR:
            return Object.assign(...state, {
                showProgressBar: !state.showProgressBar,
            });
        case ADD_PAGE:
            const pageToAdd = pageReducer({
                type: action.type,
                id: state.pages.length + 1,
            })
            return Object.assign({}, state, {
                pages: [
                    ...state.pages,
                    pageToAdd,
                ],
                pagesCount: state.pagesCount + 1,
            })
        default:
            return state;
    }
}

export default surveyToCreateReducer;