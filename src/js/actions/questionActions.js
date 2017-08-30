import {
    CHANGE_QUESTION_TEXT,
    TOGGLE_REQUIRED_STATUS,
    CREATE_QUESTION,
} from '../types/types';

let id = 0;
export const createQuestion = questionToCreate => {
    const idToSet = ++id;
    return {
        type: CREATE_QUESTION,
        questionToCreate,
        id: idToSet,
    }
}

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