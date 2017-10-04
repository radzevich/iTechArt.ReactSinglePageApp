import {
    CREATE_SURVEY,
    SAVE_CHANGES_IN_SURVEY,
    SAVE_AS_TEMPLATE,
    CREATE_PAGE,
} from '../types/types';

export const createSurvey = surveyToCreate => ({
    type: CREATE_SURVEY,
    surveyToCreate
})

export const saveAsTemplate = surveyToSaveAsTemplate => ({
    type: SAVE_AS_TEMPLATE,
    templateToSave: surveyToSaveAsTemplate
})

export const saveChangesInSurvey = changedSurveyToStave => ({
    type: SAVE_CHANGES_IN_SURVEY,
    surveyToSave: changedSurveyToStave,
})


