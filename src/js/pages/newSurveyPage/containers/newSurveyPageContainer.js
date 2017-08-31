import { connect } from 'react-redux';
import NewSurveyPage from '../components/newSurveyPage';
import {
    createSurvey,
    saveAsTemplate,
    saveChangesInSurvey,
    backupState,
} from '../../../actions/index';
import {
    createPage,
} from '../../../actions/pageActions';
import {
    createQuestion
} from '../../../actions/questionActions';

const createNewSurvey = dispatch => {
    const surveyToCreate = {};
    dispatch(createSurvey(surveyToCreate));
    return surveyToCreate;
}

const createNewPage = dispatch => {
    const pageToCreate = {};
    dispatch(createPage(pageToCreate));
    return pageToCreate;
}

const createNewQuestion = (dispatch, questionType) => {
    const questionToCreate = {    };
    dispatch(createQuestion(questionToCreate, questionType));
    return questionToCreate;
}

const mapDispatchToProps = dispatch => ({
    onSaveAsClick: () =>
        dispatch(saveAsTemplate()),
    onSaveChangesClick: () => 
        dispatch(saveChangesInSurvey()),
    createNewSurvey: () => 
        createNewSurvey(dispatch),
    createNewPage: () =>
        createNewPage(dispatch),
    createNewQuestion: (typeOfQuestionToCreate) =>
        createNewQuestion(dispatch, typeOfQuestionToCreate),
});


const NewSurveyPageContainer = connect(
    null,
    mapDispatchToProps,
)(NewSurveyPage);

export default NewSurveyPageContainer;