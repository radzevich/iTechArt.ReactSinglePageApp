const initialState = {
    templateItems: [],
    selectedItemIndex: null,
}

export const surveyTemplatesPageState = (state = initialState) => {
    return state;
}

export const surveyTemplatesPage = (state = [], action) => {
    switch (action.type) {
        case 'TEMPLATE_ITEMS_RECEIVED': 
            return {...state, templateItems: action.payload}
        default:
            return state
    }
}
