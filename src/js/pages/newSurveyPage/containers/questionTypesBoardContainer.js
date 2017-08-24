import { connect } from 'react-redux';
import { toggleSurveyOption } from '../../../actions/surveyActions';
import QuestionTypesBoard from '../components/questionTypesBoard';
import { questionTypesName } from '../../../types/types';

const quetionTypes = {
    types: Object.values(questionTypesName)
};

const QuestionTypesBoardContainer = connect(
    quetionTypes
)(QuestionTypesBoard);

export default QuestionTypesBoardContainer;