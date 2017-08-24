import { combineReducers } from 'redux';
import surveyReducer from './items/pageReducer';
import pageReducer from './items/surveyReducer';
import questionReducer from './items/questionReducer';

const rootReducer = combineReducers({
    pageReducer,
    questionReducer,
    surveyReducer,
})

export default rootReducer