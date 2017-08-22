const templateItems = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TEMPLATE_ITEM':
            return state;
        case 'REMOVE_TEMPLATE_ITEM':
            return state;
        case 'TOGGLE_TEMPLATE_ITEM_SELECTION':
            return state.map(item =>
                (item.id === action.id)
                    ? {...item, selected: true}
                    : {...item, selected: false}
            )
        default:
            return state;
    }
}

export default templateItems