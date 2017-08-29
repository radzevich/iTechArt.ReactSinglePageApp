import {
    RENAME_PAGE,
    ADD_QUESTION,
    CREATE_PAGE,
} from '../types/types';

let id = 1;
export const createPage = pageToCreate => {
    const idToSet = ++id;
    return {
        type: CREATE_PAGE,
        pageToCreate,
        id: idToSet,
    }
}

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

