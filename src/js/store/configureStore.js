import { createStore } from 'redux'
import rootReducer from '../reducers/index'

const initialState = {
    templateReducer: [],
    surveys: [],
    history: [],
};

export default function configureStore() {
    const store = createStore(rootReducer, initialState);
    return store;
}