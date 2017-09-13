export const SAVE_CHANGES_IN_SURVEY = 'SAVE_CHANGES_IN_TEMPLATE';
export const SAVE_AS_TEMPLATE = 'SAVE_AS_TEMPLATE';
export const STATE_BACKUP = 'STATE_BACKUP';
export const NEW_TEMPLATE = 'NEW_TEMPLATE';

export const CREATE_SURVEY = 'CREATE_SURVEY';
export const ADD_PAGE = 'ADD_PAGE';
export const CREATE_PAGE = 'CREATE_PAGE';

export const TOGGLE_ANON_STATUS = 'TOGGLE_ANON_STATUS';
export const TOGGLE_QUESTION_ORDER = 'TOGGLE_QUESTION_ORDER';
export const TOGGLE_SHOW_PAGE_NUMS = 'TOGGLE_SHOW_PAGE_NUMS';
export const TOGGLE_SHOW_PROGRESS_BAR = 'TOGGLE_SHOW_PROGRESS_BAR';
export const TOGGLE_SHOW_QUESTION_NUMS = 'TOGGLE_SHOW_QUESTION_NUMS';
export const TOGGLE_SHOW_REQUIRED_QUESTION_MARK = 'TOGGLE_SHOW_REQUIRED_QUESTION_MARK';

export const RENAME_PAGE = 'RENAME_PAGE';
export const ADD_QUESTION = 'ADD_QUESTION';
export const CREATE_QUESTION = 'CREATE_QUESTION';

export const CHANGE_QUESTION_TEXT = 'CHANGE_QUESTION_TEXT';
export const TOGGLE_REQUIRED_STATUS = 'TOGGLE_REQUIRED_STATUS';

export const DEFAULT_QUESTION_TYPE = 0;

export const TEMPLATE_OPTIONS_BOARD_TITLE = 'Тип вопроса';
export const DEFAULT_PAGE_TITLE = 'Страница';
export const SURVEY_OPTIONS_PANEL_TITLE = 'Параметры опроса';
export const QUESTION_TYPES_PANEL_TITLE = 'Тип вопроса';

export const NEW_SURVEY_PAGE__QUESTIONS_WERE_UPDATED_MESSAGE = 'Все несохранённые изменения будут утеряны!';

export const EDIT_PANEL__SAVE_BUTTON_TEXT = 'Сохранить';
export const EDIT_PANEL__SAVE_AS_BUTTON_TEXT = 'Сохранить как шаблон';
export const EDIT_PANEL__CANCEL_BUTTON_TEXT = 'Отмена';
export const EDIT_PANEL__NEW_PAGE_BUTTON_TEXT = 'Новая страница';

export const EDIT_QUESTION_WRAPPER__TRANSFER_TEXT = 'Переместить';
export const EDIT_QUESTION_WRAPPER__IS_REQUIRED_TEXT = 'Обязательный';
export const EDIT_QUESTION_WRAPPER__SUBMIT_QUESTION_TEXT = 'Сохранить';
export const EDIT_QUESTION_WRAPPER__CANCEL_TEXT = 'Отмена';

export const SELECT_QUESTION__DEFAULT_TEXT = 'Ответ';

export const QUESTION_CREATOR__EDIT_MODE = 0;
export const QUESTION_CREATOR__EDIT_MODE_CHANGED = 1;
export const QUESTION_CREATOR__VIEW_MODE = 2;
export const QUESTION_CREATOR__VIEW_MODE_CHANGED = 3;
export const QUESTION_CREATOR__QUESTION_WAS_UPDATED = 0;
export const QUESTION_CREATOR__QUESTION_WAS_COMMITED = 1;

export const RANGE_QUESTION__MIN_VALUE_ID = 0;
export const RANGE_QUESTION__MAX_VALUE_ID = 1;
export const RANGE_QUESTION__USER_VALUE_ID = 2;
export const RANGE_QUESTION__DEFAULT_MIN_VALUE = 0;
export const RANGE_QUESTION__DEFAULT_MAX_VALUE = 100;
export const RANGE_QUESTION__DEFAULT_USER_VALUE = 50;
 
export const questionTypesName = {
    SINGLE: 'single',
    MULTI: 'multi',
    TEXT: 'text',
    FILE: 'file',
    RATING: 'rating',
    RANGE: 'range',
}

export const questionTypeInfoToRender = typeName => {
    switch(typeName) {
        case questionTypesName.SINGLE: 
            return {
                title: 'Варианты ответа (один)',
                iconName: 'list-ul', 
            };
        case questionTypesName.MULTI: 
            return {
                title: 'Варианты ответа (несколько)',
                iconName: 'list-ol', 
            };
        case questionTypesName.TEXT: 
            return {
                title: 'Текст',
                iconName: 'font', 
            };
        case questionTypesName.FILE: 
            return  {
                title: 'Файл',
                iconName: 'file', 
            };
        case questionTypesName.RATING: 
            return {
                title: 'Рейтинг в звёздах',
                iconName: 'star-o', 
            };
        case questionTypesName.RANGE: 
            return {
                title: 'Шкала',
                iconName: 'battery-three-quarters ', 
            };
    }
}

export const questionTypesText = typeName => {
    switch(typeName) {
        case questionTypesName.SINGLE: 
            return 'Вопрос с одним ответом';
        case questionTypesName.MULTI: 
            return 'Вопрос с несколькими ответами';
        case questionTypesName.TEXT: 
            return 'Вопрос с текстовым ответом';
        case questionTypesName.FILE: 
            return 'Вопрос-файл';
        case questionTypesName.RATING: 
            return 'Вопрос-рейтинг';
        case questionTypesName.RANGE: 
            return 'Вопрос-шкала';
    }
};

export const questionTypesDeafaultAnswers = typeName => {
    switch(typeName) {
        case questionTypesName.SINGLE:
        case questionTypesName.MULTI:
            return [
                {
                    id: 1,
                    value: SELECT_QUESTION__DEFAULT_TEXT + ' ' + 1,
                },
                {
                    id: 2,
                    value: SELECT_QUESTION__DEFAULT_TEXT + ' ' + 2,
                },
                {
                    id: 3,
                    value: SELECT_QUESTION__DEFAULT_TEXT + ' ' + 3,
                },
            ];
        case questionTypesName.RANGE:
            return [
                {
                    id: RANGE_QUESTION__MIN_VALUE_ID,
                    value: RANGE_QUESTION__DEFAULT_MIN_VALUE,
                },
                {
                    id: RANGE_QUESTION__MAX_VALUE_ID,
                    value: RANGE_QUESTION__DEFAULT_MAX_VALUE,
                },
                {
                    id: RANGE_QUESTION__USER_VALUE_ID,
                    value: RANGE_QUESTION__DEFAULT_USER_VALUE,
                },
            ];
        case questionTypesName.TEXT:
        case questionTypesName.FILE:
        case questionTypesName.RATING:
            return {
                id: 0,
                value: '',
            }
    }
}

export const defaultSelectAnswer = (idOfAnswerToCreate, indexToSetValue = idOfAnswerToCreate) => ({
    id: idOfAnswerToCreate,
    value: SELECT_QUESTION__DEFAULT_TEXT + ' ' + indexToSetValue,
});

export const questionOptionsText = {
    ANON_STATUS_TEXT: 'Анонимный опрос',
    QUESTION_ORDER_TEXT: 'Случайный порядок вопросов',
    SHOW_PAGE_NUMS_TEXT: 'Номера страниц',
    SHOW_PROGRESS_BAR_TEXT: 'Индикатор выполнения',
    SHOW_QUESTION_NUMS_TEXT: 'Номера вопросов',
    SHOW_REQUIRED_QUESTION_MARK_TEXT: 'Звёздочки обязателных вопросов',
}

const DEFAULT_ANSWERS_NUM = 3;

export const questionTypesAnswersCount = typeName => {
    switch(typeName) {
        case questionTypesName.SINGLE: 
        case questionTypesName.MULTI: 
            return DEFAULT_ANSWERS_NUM;
        default:
            return 0;
    }
}