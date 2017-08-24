import { connect } from 'react-redux';
import { toggleSurveyOption } from '../../actions/surveyAction';
import QuestionTypesBoard from '../components/questionTypesBoard';
import questionTypesName from '../../../types/types';

const quetionTypes = {
    types: Object.values(questionTypesName)
};

connect(questionTypes)(QuestionTypesBoard);