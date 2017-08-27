import {
    TOGGLE_ANON_STATUS,
    TOGGLE_QUESTION_ORDER,
    TOGGLE_SHOW_PAGE_NUMS,
    TOGGLE_SHOW_PROGRESS_BAR,
    TOGGLE_SHOW_QUESTION_NUMS,
    TOGGLE_SHOW_REQUIRED_QUESTION_MARK,
    ADD_PAGE,
} from '../types/types';

export const toggleAnonStatus = () => {
    return {
        type: TOGGLE_ANON_STATUS,
    }
}

export const toggleQuestionOrder = () => {
    return {
        type: TOGGLE_QUESTION_ORDER,
    }
}

export const toggleShowPagesNum = () => {
    return {
        type: TOGGLE_SHOW_PAGE_NUMS,
    }
}

export const toggleShowProgreeBar = () => {
    return {
        type: TOGGLE_SHOW_PROGRESS_BAR,
    }
}

export const toggleShowQuestionNums = () => {
    return {
        type: TOGGLE_SHOW_QUESTION_NUMS,
    }
}

export const toggleShowRequiredQuestionMark = () => {
    return {
        type: TOGGLE_SHOW_REQUIRED_QUESTION_MARK,
    }
}

export const addPage = page => {
    return {
        type: ADD_PAGE,
        page,
    }
}

