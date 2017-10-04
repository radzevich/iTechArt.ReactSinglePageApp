import { 
    DEFAULT_PAGE_NAME, 
    DEFAULT_SURVEY_NAME,
    DEFAULT_ANSWER_TEXT,
    questionTypesName,
    questionTypesAnswersCount,
    questionTypesText,
} from '../types/types';

export const initialState = {
    users: [],
    surveys: [],
}

export const surveyInitialState = (surveyNum = 0) => {
    return {
        title: DEFAULT_SURVEY_NAME + ' ' + surveyNum,
        isAnon: true,
        showQuestionNums: true,
        showPageNums: true,
        isQuestionOrderRandom: false,
        showRequiredQuestionsMarks: false,
        showProgressBar: true,
        pages: [],
    }
}

export const pageInitialState = pageNum => {
    return {
        pageTitle: DEFAULT_PAGE_NAME + ' ' + pageNum,
        questions: [],
    }
}

export const questionInitialState = questionType => {
    const questionText = questionTypesText(questionType);
    const answersCount = questionTypesAnswersCount(questionType);
    return {
        type: questionType,
        text: questionText,
        isRequired: false,
        answers: createAnswerArrayHelper(answersCount),
    }
}

export const answerInitialState = (answersNum) => {
    return {
        text: DEFAULT_ANSWER_TEXT + ' ' + answersNum, 
        isChecked: '',
    }
}

const createAnswerArrayHelper = answersNum => {
    const answers = [];
    for (let i = 0; i < answersNum; i++) {
        const answer = answerInitialState(i)
        answers.push(answer);
    }
    return answers;
}
