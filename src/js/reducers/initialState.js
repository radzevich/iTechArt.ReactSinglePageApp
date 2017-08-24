import { 
    DEFAULT_PAGE_NAME, 
    DEFAULT_SURVEY_NAME,
    DEFAULT_ANSWER_TEXT,
    questionTypes,
    questionTypesAnswersCount,
} from '../../types/types';

export const initialState = {
    users: [],
    surveys: [],
}

export const surveyInitialState = surveyNum => {
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
    const answersCount = questionTypesAnswersCount(questionType);
    const questionText = questionDefaultText(questionType);
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
        text: DEFAULT_ANSWER_TEXT + ' ' + answeNum, 
        isChecked: '',
    }
}

createAnswerArrayHelper(answersNum) {
    const answers = [];
    for (let i = 0; i < answersNum; i++) {
        const answer = answerInitialState(i)
        answers.push(answer);
    }
}
