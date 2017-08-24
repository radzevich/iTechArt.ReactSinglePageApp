import {
    CHANGE_QUESTION_TEXT,
    TOGGLE_REQUIRED_STATUS,
} from '../types/types';

export const changeQuestionText = textToChange => {
    return {
        type: CHANGE_QUESTION_TEXT,
        textToChange,
    }
}

export const toggleRequiredStatus = () => {
    return {
        type: TOGGLE_REQUIRED_STATUS,
    }
}