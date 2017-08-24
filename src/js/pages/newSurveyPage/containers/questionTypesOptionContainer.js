import { connect } from 'react-redux';
import { addQuestion } from '../../../actions/pageActions';
import QuestionTypesOption from '../components/controls/questionTypesOption';
import questionTypesTitle from '../../../types/types';

const mapDispatchToProps = dispatch  => {
    return {
        onSelectorClick: typeId => {
            dispatch(addQuestion(typeId));
        } 
    }
}

const mapStateToProps = (state, ownProps) => {
    const questionTitle = questionTypesTitle(ownProps.id);
    return Object.assign({}, questionTitle, ownProps);
}

const QuestionTypeOptionContainer = connect(
    mapDispatchToProps,
    masStateToProps
)(QuestionTypesOption);
  
export default QuestionTypesOptionContainer;