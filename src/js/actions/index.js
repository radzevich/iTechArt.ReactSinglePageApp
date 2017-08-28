import {
    SAVE_CHANGES_IN_SURVEY,
    SAVE_AS_TEMPLATE,
    STATE_BACKUP,
} from '../types/types';

export const saveChangesInSurvey = {
    type: SAVE_CHANGES_IN_SURVEY,
}

export const saveAsTemplate = templateToSave => {
    return {
        type: SAVE_AS_TEMPLATE,
        template: templateToSave,
    }
}

export const saveChangesInSurvey = changedSurvey => {
    return {
        type: SAVE_CHANGES_IN_SURVEY,
        survey: changedSurvey,
    }
}

export const backupState = template => {
    return {
        type: STATE_BACKUP,
    }
}

export const createNewPage = {
    type: ADD_PAGE,
}