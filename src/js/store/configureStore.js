import { createStore } from 'redux'
import rootReducer from '../reducers/index'

<<<<<<< Updated upstream
const initialState = {
    templateReducer: [],
    surveys: [],
    previousState: {},
};

export default function configureStore() {
    const store = createStore(rootReducer, initialState);
    return store;
}