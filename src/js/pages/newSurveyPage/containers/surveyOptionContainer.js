import { connect } from 'react-redux';
import { toggleSurveyOption } from '../../actions/surveyAction';
import SurveyParamsListItem from '../components/surveyParamsBoard';

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