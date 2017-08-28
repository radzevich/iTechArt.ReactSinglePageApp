import { createStore } from 'redux'
import rootReducer from '../reducers/index'

const initialState = {
    templateReducer: [],
    surveys: [],
    previousState: {},
};

export default function configureStore() {
    const store = createStore(rootReducer, initialState);
    return store;
}