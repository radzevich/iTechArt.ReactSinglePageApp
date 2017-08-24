import questionTypes from '../../types/types';

export const initialState = {
    users: [],
    survey: [],
}

export const surveyInitialState = {
    isAnon: true,
    showQuestionNums: true,
    showPageNums: true,
    isQuestionOrderRandom: false,
    showRequiredQuestionsMarks: false,
    showProgressBar: true,
    pages: [],
}

export const questionInitialState = {
    type: questionTypes.SINGLE,

}