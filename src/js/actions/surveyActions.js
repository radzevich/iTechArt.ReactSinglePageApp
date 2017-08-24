import {
    ADD_PAGE,
} from '../types/types';

export const toggleSurveyOption = toggledOption => {
    type: toggledOption;
}

export const addPage = page => {
    return {
        type: ADD_PAGE,
        page,
    }
}

