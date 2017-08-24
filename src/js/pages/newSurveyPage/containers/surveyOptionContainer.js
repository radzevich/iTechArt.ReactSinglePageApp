import { connect } from 'react-redux';
import { toggleSurveyOption } from '../../actions/surveyAction';
import SurveyOptionsListItem from '../components/surveyOptionsListItem';
import questionOptions from '../../../types/types';

const mapDispatchToProps = dispatch => {
    return {
        onToggle: toggledOptionId => {
            dispatch(toggleSurveyOption(toggledOptionId));
        }
    }
}

const SurveyOption = connect(
    mapDispatchToProps
)(TodoList)