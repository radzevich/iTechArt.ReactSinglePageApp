import {
    RENAME_PAGE,
    ADD_QUESTION,
} from '../../types/types';
import {
    pageInitialState,
    questionInitialState,
 } from '../initialState';

function pageReducer(state = pageInitialState, action) {
    switch(action.type) {
        case RENAME_PAGE: {
            return Object.assign({}, state, {
                title: action.newTitle,
            })
        }
        case ADD_QUESTION: {
            const newQuestionToAdd = questionInitialState(action.questionType);
            return Object.assign({}, state, {
                questions: [
                    ...state.questions,
                    newQuestionToAdd,
                ]
            })
        }
        default: {
            return state;
        }
    }
}