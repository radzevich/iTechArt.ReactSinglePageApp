import { combineReducers } from 'redux';
import templateReducer from './templateReducer';
import {
    SAVE_CHANGES_IN_SURVEY,
    SAVE_AS_TEMPLATE,
    STATE_BACKUP,
    ADD_TEMPLATE,
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
} from '../types/types';

function rootReducer(state = {}, action) {
    switch (action.type) {
        case SAVE_CHANGES_IN_SURVEY: 
            state.history = [];
            return state.templates.map(template => templateReducer(template, action));
        case SAVE_AS_TEMPLATE:
            return Object.assign({}, state, {
                templates: [
                    ...state.templates,
                    action.template,  
                ]}
            )
        case STATE_BACKUP: {
            const previousStateIndex = history.length - 1;
            const previousState = state.history[previousStateIndex];
            return Object.assign({}, state, {
                templates: [
                    ...state.surveys,
                    previousState,  
                ],
                history: state.history.slice(0, previousStateIndex),
            });
        }
        case ADD_TEMPLATE:
        case ADD_SURVEY:
        case SAVE_CHANGES_IN_SURVEY:
        case TOGGLE_ANON_STATUS:
        case TOGGLE_QUESTION_ORDER:
        case TOGGLE_SHOW_PAGE_NUMS:
        case TOGGLE_SHOW_PROGRESS_BAR:
        case TOGGLE_SHOW_QUESTION_NUMS:
        case TOGGLE_SHOW_REQUIRED_QUESTION_MARK:
        case ADD_PAGE:
        case RENAME_PAGE:
        case ADD_QUESTION:
        case CHANGE_QUESTION_TEXT:
        case TOGGLE_REQUIRED_STATUS:
            state.history.push(state.surveys);
            state.surveys.map(survey, action);
        default: 
            return state;
    }
}

export default rootReducer;