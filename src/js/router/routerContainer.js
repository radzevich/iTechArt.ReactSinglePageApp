import { connect } from 'react-redux';
import {
    createSurvey,
} from '../actions/index';
import Router from './router';

const mapDispatchToProps = dispatch => {
    return {
        onNewSurveyClick: () => dispatch(createSurvey()),
    }
}

const RouterContainer = connect(
    mapDispatchToProps,
)(Router);

export default RouterContainer;