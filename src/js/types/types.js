export default ADD_PAGE = 'ADD_PAGE';
export default TOGGLE_ANON_STATUS = 'TOGGLE_ANON_STATUS';
export default TOGGLE_QUESTION_ORDER = 'TOGGLE_QUESTION_ORDER';
export default TOGGLE_SHOW_PAGE_NUMS = 'TOGGLE_SHOW_PAGE_NUMS';
export default TOGGLE_SHOW_PROGRESS_BAR = 'TOGGLE_SHOW_PROGRESS_BAR';
export default TOGGLE_SHOW_QUESTION_NUMS = 'TOGGLE_SHOW_QUESTION_NUMS';
export default TOGGLE_SHOW_REQUIRED_QUESTION_MARK = 'TOGGLE_SHOW_REQUIRED_QUESTION_MARK';

export default RENAME_PAGE = 'RENAME_PAGE';
export default ADD_QUESTION = 'ADD_QUESTION';

export default CHANGE_QUESTION_TEXT = 'CHANGE_QUESTION_TEXT';
export default TOGGLE_REQUIRED_STATUS = 'TOGGLE_REQUIRED_STATUS';

export default DEFAULT_SURVEY_NAME = 'Опрос №';
export default DEFAULT_PAGE_NAME = 'Страница';
export default DEFAULT_ANSWER_TEXT = 'Ответ'

export default questionTypesName = {
    SINGLE: 'single',
    MULTI: 'multi',
    TEXT: 'text',
    FILE: 'file',
    RATING: 'rating',
    RANGE: 'range',
}

export default questionTypesTitle = typeName => {
    switch(typeName) {
        case SINGLE: 
            return {
                title: 'Варианты ответа (один)',
                iconName: 'list-ul', 
            };
        case MULTI: 
            return {
                title: 'Варианты ответа (несколько)',
                iconName: 'list-ol', 
            };
        case TEXT: 
            return {
                title: 'Текст',
                iconName: 'font', 
            };
        case FILE: 
            return  {
                title: 'Файл',
                iconName: 'file', 
            };
        case RATING: 
            return {
                title: 'Рейтинг в звёздах',
                iconName: 'star-o', 
            };
        case RANGE: 
            return {
                title: 'Шкала',
                iconName: 'battery-three-quarters ', 
            };
    }
}

export default questionTypesText = typeName => {
    switch(typeName) {
        case SINGLE: 
            return 'Вопрос с одним ответом';
        case MULTI: 
            return 'Вопрос с несколькими ответами';
        case TEXT: 
            return 'Вопрос с текстовым ответом';
        case FILE: 
            return 'Вопрос-файл';
        case RATING: 
            return 'Вопрос-рейтинг';
        case RANGE: 
            return 'Вопрос-шкала';
    }
};

const DEFAULT_ANSWERS_NUM = 3;

export default questionTypesAnswersCount = typeName => {
    switch(typeName) {
        case SINGLE: 
        case MULTI: 
            return DEFAULT_ANSWERS_NUM;
        default:
            return 0;
    }
}