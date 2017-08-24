import questionDefaultText from '../defaultValues';
import { 
    DEFAULT_PAGE_NAME, 
    questionTypes
} from '../../types/types';

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

export const pageInitialState = pageNum => {
    return {
        pageTitle: DEFAULT_PAGE_NAME + ' ' + pageNum,
        questions: [],
    }
}

export const questionInitialState = {
    type: questionTypes.SINGLE,
    text: questionDefaultText(questionTypes.SINGLE),
    isRequired: false,
    answers: [],
}