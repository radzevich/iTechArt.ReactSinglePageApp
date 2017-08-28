import {
    TOGGLE_ANON_STATUS,
    TOGGLE_QUESTION_ORDER,
    TOGGLE_SHOW_PAGE_NUMS,
    TOGGLE_SHOW_PROGRESS_BAR,
    TOGGLE_SHOW_QUESTION_NUMS,
    TOGGLE_SHOW_REQUIRED_QUESTION_MARK,
} from  '../types/types';

function newSurveyReducer(state = {}, action) {
    switch (action.type) {
        case ADD_SURVEY: 
            return {
                isAnon: true,
                showQuestionNums: true,
                showPageNums: true,
                isQuestionOrderRandom: false,
                showRequiredQuestionsMarks: false,
                showProgressBar: true,
                pages: [],
                pagesCount: 0,
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
        default:
            return state;
    }
}

export default newSurveyReducer;