import { connect } from 'react-redux';
import { addQuestion } from '../../actions/pageActions';
import QuestionTypeOption from '../components/questionTypeOption';

const mapDispatchToProps = dispatch  => {
    return {
        onSelectorClick: typeId => {
            dispatch(addQuestion(typeId));
        } 
    }
}

const QuestionTypeSelector = connect(
    mapDispatchToProps
)(QuestionTypeOption);
  
export default QuestionTypeSelector;