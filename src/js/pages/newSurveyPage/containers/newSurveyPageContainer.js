import { connect } from 'react-redux';
import NewSurveyPage from '../components/newSurveyPage';
import {
    createSurvey,
    saveAsTemplate,
    saveChangesInSurvey,
    backupState,
    createNewPage,
} from '../../../actions/index';

const mapStateToProps = state => ({
    surveyToCreate: state.surveyToCreate,
})

const createNewSurvey = dispatch => {
    const surveyToCreate = {};
    dispatch(createSurvey(surveyToCreate));
    return surveyToCreate;
}

const mapDispatchToProps = dispatch => ({
    onSaveAsClick: () => {
        dispatch(saveAsTemplate());
    },
    onSaveChangesClick: () => {
        dispatch(saveChangesInSurvey());
    },
    createNewSurvey: () => {
        createNewSurvey(dispatch)
    },
});

const NewSurveyPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(NewSurveyPage);

export default NewSurveyPageContainer;