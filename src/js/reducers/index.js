import { combineReducers } from 'redux';
import surveys from './surveys';
import {
    SAVE_CHANGES_IN_SURVEY,
    SAVE_AS_TEMPLATE,
    STATE_BACKUP,
    ADD_SURVEY,
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
} from '../types/types';

// function rootReducer(state = {}, action) {
//     switch (action.type) {
//         case SAVE_AS_TEMPLATE:
//             return Object.assign({}, state, {
//                 templates: [
//                     ...state.templates,
//                     action.template,  
//                 ]}
//             );
//         case STATE_BACKUP: {
//             const previousState = state.previousState;
//             return Object.assign({}, state, {
//                 surveys: [
//                     ...state.surveys,
//                     previousState,  
//                 ],
//             });
//         }
//         case TOGGLE_ACTIVE_SURVEY: {
//             const activeSurveyIndex
//         }
//         case SAVE_CHANGES_IN_SURVEY: 
//         case ADD_SURVEY:
//         case SAVE_CHANGES_IN_SURVEY:
//         case TOGGLE_ANON_STATUS:
//         case TOGGLE_QUESTION_ORDER:
//         case TOGGLE_SHOW_PAGE_NUMS:
//         case TOGGLE_SHOW_PROGRESS_BAR:
//         case TOGGLE_SHOW_QUESTION_NUMS:
//         case TOGGLE_SHOW_REQUIRED_QUESTION_MARK:
//         case ADD_PAGE:
//         case RENAME_PAGE:
//         case ADD_QUESTION:
//         case CHANGE_QUESTION_TEXT:
//         case TOGGLE_REQUIRED_STATUS:
//             const nextSurveyState = state.surveys.map(survey => surveys(survey, action));
//             return Object.assign({}, state, {
//                 surveys: nextSurveyState,
//                 history: nextSurveyState,                
//             });
//         default: 
//             return state;
//     }
// }

function rootReducer(state = {}, action) {
    switch (action.type) {
        case ADD_SURVEY: 
            const newSurvey = surveys(undefined, action);
            return Object.assign({}, state, {
                newSurvey: surveys(undefined, action),
            });
        case SAVE_AS_TEMPLATE: {
            if (!state.newSurvey) {
                return state;
            }
            return Object.assign({}, state, {
                templates: [
                    ...state.templates,
                    state.newSurvey,
                ],
                newSurvey: null,
            });
        }
        case STATE_BACKUP:
            return Object.assign({}, state, {
                newSurvey: null,
            });
        default:
            return state;
    }
}

export default rootReducer;