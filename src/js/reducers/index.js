import { combineReducers } from 'redux';
import surveyToCreateReducer from './surveyToCreateReducer';
import pageReducer from './pageReducer';
import questionReducer from './questionReducer';
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

    CREATE_SURVEY,
    CREATE_PAGE,
    CREATE_QUESTION,
} from '../types/types';

function rootReducer(state = {}, action) {
    switch (action.type) {
        case CREATE_SURVEY: 
            const newSurvey = surveyToCreateReducer(undefined, action);  
            Object.assign(action.surveyToCreate, newSurvey);
            return state; 
        case CREATE_PAGE: 
            const newPage = pageReducer(undefined, action);  
            Object.assign(action.pageToCreate, newPage);
            return state; 
        case CREATE_QUESTION: 
            const newQuestion = questionReducer(undefined, action);  
            Object.assign(action.questionToCreate, newQuestion);
            return state; 
        case SAVE_AS_TEMPLATE: {
            if (!state.surveyToCreate) {
                return state;
            }
            return Object.assign({}, state, {
                templates: [
                    ...state.templates,
                    action.templateToSave,
                ],
                surveyToCreate: null,
            });
        }
        case SAVE_CHANGES_IN_SURVEY: {
            if (!state.surveyToCreate) {
                return state;
            }
            return Object.assign({}, state, [
                ...state.surveys,
                action.surveyToSave,
            ])
        }
        case STATE_BACKUP:
            return Object.assign({}, state, {
                surveyToCreate: null,
            });
        case TOGGLE_ANON_STATUS:
        case TOGGLE_QUESTION_ORDER:
        case TOGGLE_SHOW_PAGE_NUMS:
        case TOGGLE_SHOW_PROGRESS_BAR:
        case TOGGLE_SHOW_QUESTION_NUMS:
        case TOGGLE_SHOW_REQUIRED_QUESTION_MARK:
        case ADD_PAGE:
            return Object.assign({}, state,
                surveyToCreateReducer(state.surveyToCreate, action)
            )
        default:
            return state;
    }
}

export default rootReducer;