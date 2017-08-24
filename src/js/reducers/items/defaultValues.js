import questionTypes from './initialState'

const SINLE_DEFAULT_TEXT = 'Вопрос с одним ответом';
const MULTI_DEFAULT_TEXT = 'Вопрос с несколькими ответами';
const TEXT_DEFAULT_TEXT = 'Вопрос с текстовым ответом';
const FILE_DEFAULT_TEXT = 'Вопрос-файл';
const RATING_DEFAULT_TEXT = 'Вопрос-рейтинг';
const RANGE_DEFAULT_TEXT = 'Вопрос-шкала';

export const questionDefaultText = questionType => {
    switch (questionType) {
        case questionType.SINGLE:
            return SINLE_DEFAULT_TEXT;
        case questionType.MULTI:
            return MULTI_DEFAULT_TEXT
        case questionType.TEXT:
            return TEXT_DEFAULT_TEXT
        case questionType.FILE:
            return FILE_DEFAULT_TEXT
        case questionType.RATING:
            return RATING_DEFAULT_TEXT
        case questionType.RANGE:
            return RANGE_DEFAULT_TEXT
    }
}