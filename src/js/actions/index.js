const GET_TEMPLATE_ITEMS = 'GET_TEMPLATE_ITEMS'
const TEPMALATE_ITEMS_RECEIVED = 'TEMPLATE_ITEMS_RECEIVED'
const TOGGLE_TEMPLATE_ITEM_SELECTION = 'TOGGLE_TEMPLATE_ITEM_SELECTION'

export const getTemplateItems = () => {
    return {
        type: GET_TEMPLATE_ITEMS,
    }
}

export const temlateItemsReceived = payload => {
    return {
        type: TEPMALATE_ITEMS_RECEIVED,
        payload,
    }
}

export const toggleTemplateItem = id => {
    return {
        type: TOGGLE_TEMPLATE_ITEM_SELECTION,
        id,
    }
}