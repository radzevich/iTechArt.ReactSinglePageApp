import { createStore } from 'redux'
import rootReducer from '../reducers/index'

const initialState = {
    templates: [],
    surveys: [],
    surveyToCreate: {},
};

export default function configureStore() {
    const store = createStore(rootReducer, initialState);
    return store;
}