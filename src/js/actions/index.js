import {
    SAVE_CHANGES_IN_SURVEY,
    SAVE_AS_TEMPLATE,
    STATE_BACKUP,
    ADD_PAGE,
} from '../types/types';

export const saveAsTemplate = {
    type: SAVE_AS_TEMPLATE,
}

export const saveChangesInSurvey = {
    type: SAVE_CHANGES_IN_SURVEY,
}

export const backupState = {
    type: STATE_BACKUP,
}

export const createNewPage = {
    type: ADD_PAGE,
}