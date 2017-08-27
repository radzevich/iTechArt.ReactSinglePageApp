export const SAVE_CHANGES_IN_SURVEY = 'SAVE_CHANGES_IN_TEMPLATE';
export const SAVE_AS_TEMPLATE = 'SAVE_AS_TEMPLATE';
export const STATE_BACKUP = 'STATE_BACKUP';
export const NEW_TEMPLATE = 'NEW_TEMPLATE';

export const ADD_SURVEY = 'ADD_TEMPLATE';
export const ADD_PAGE = 'ADD_PAGE';
export const TOGGLE_ANON_STATUS = 'TOGGLE_ANON_STATUS';
export const TOGGLE_QUESTION_ORDER = 'TOGGLE_QUESTION_ORDER';
export const TOGGLE_SHOW_PAGE_NUMS = 'TOGGLE_SHOW_PAGE_NUMS';
export const TOGGLE_SHOW_PROGRESS_BAR = 'TOGGLE_SHOW_PROGRESS_BAR';
export const TOGGLE_SHOW_QUESTION_NUMS = 'TOGGLE_SHOW_QUESTION_NUMS';
export const TOGGLE_SHOW_REQUIRED_QUESTION_MARK = 'TOGGLE_SHOW_REQUIRED_QUESTION_MARK';

export const RENAME_PAGE = 'RENAME_PAGE';
export const ADD_QUESTION = 'ADD_QUESTION';

export const CHANGE_QUESTION_TEXT = 'CHANGE_QUESTION_TEXT';
export const TOGGLE_REQUIRED_STATUS = 'TOGGLE_REQUIRED_STATUS';

export const DEFAULT_QUESTION_TYPE = 0;

export const TEMPLATE_OPTIONS_BOARD_TITLE = 'Тип вопроса';
 
export const questionTypesName = {
    SINGLE: 'single',
    MULTI: 'multi',
    TEXT: 'text',
    FILE: 'file',
    RATING: 'rating',
    RANGE: 'range',
}

export const questionTypesTitle = typeName => {
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