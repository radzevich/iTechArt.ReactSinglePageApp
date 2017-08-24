import initialState from './initialState';
import surveys from './items/surveys.js';

const rootReducer = combineReducers({
    surveys,
})

function rootReducer(state = initialState, action) {
    return {

    }
}

export default rootReducer