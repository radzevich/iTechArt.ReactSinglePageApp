import {
    CHANGE_QUESTION_TEXT,
    TOGGLE_REQUIRED_STATUS,
} from '../../types/types';
import {
    questionInitialState,
 } from '../initialState';

function QuestionReducer(state = questionInitialState, action) {
    switch (action.type) {
        case CHANGE_QUESTION_TEXT:
            return Object.assign({}, state, {
                text: action.textToChange,
            })
        case TOGGLE_REQUIRED_STATUS:
            return Object.assign({}, state, {
                isRequired: !state.isRequired,
            })
    }
}