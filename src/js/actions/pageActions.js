import {
    RENAME_PAGE,
    ADD_QUESTION,
} from '../types/types';

export const renamePage = newTitle => {
    return {
        type: RENAME_PAGE,
        newTitle,
    }
}

export const addQuestion = questionType => {
    return {
        type: ADD_QUESTION,
        questionType,
    }
}