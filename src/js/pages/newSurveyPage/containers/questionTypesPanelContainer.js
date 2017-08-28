import { connect } from 'react-redux';
import QuestionTypesBoard from '../components/questionTypesBoard';
import { 
    questionTypesName, 
    questionTypesTitle,
} from '../../../types/types';
import { addQuestion } from '../../../actions/pageActions';

const quetionTypes = [...[],
    questionTypesName.map(type => {
        const questionTitle = questionTypesTitle[type];
        return Object.assign({}, questionTitle, {
            type: type,
        });
    })
];

const mapDispatchToProps = dispatch => {
    return typeOfQuestionToCreate => {
        dispatch(addQuestion(typeOfQuestionToCreate));
    }
}


const QuestionTypesBoardContainer = connect(
    quetionTypes,
)(QuestionTypesBoard);

export default QuestionTypesBoardContainer;