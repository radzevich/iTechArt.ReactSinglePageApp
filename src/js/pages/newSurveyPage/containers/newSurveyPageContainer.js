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
import axios from "axios";
import { apiRoutes } from '../../../types/types';

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

const saveNewSurvey = (surveyToCreate) => {
    const url = apiRoutes.BASE + '/' + apiRoutes.CREATE_SURVEY;
    axios.post(url, surveyToCreate)
         .catch(() => alert('Something went wrong :('));
}

const saveSurveyAsTemplate = (surveyToSaveAsTemplate) => {
    const url = apiRoutes.BASE + '/' + apiRoutes.SAVE_AS_TEMPLATE;
    axios.post(url, surveyToSaveAsTemplate)
         .catch(() => alert('Something went wrong :('));
}

const updateSurey = (surveyToUpdate) => {
    const url = apiRoutes.BASE + '/' + apiRoutes.UPDATE_SURVEY;
    axios.post(url, surveyToUpdate)
         .catch(() => alert('Something went wrong :('));
}

const mapDispatchToProps = dispatch => ({
    onSaveAsClick: () =>
        dispatch(saveAsTemplate()),
    onSaveChangesClick: () => 
        dispatch(saveChangesInSurvey()),
    createNewPage: () =>
        createNewPage(dispatch),
    createNewQuestion: (typeOfQuestionToCreate) =>
        createNewQuestion(dispatch, typeOfQuestionToCreate),
    createNewSurvey: () => 
        createNewSurvey(dispatch),
    saveNewSurvey: (createdSurvey) =>
        saveNewSurvey(createdSurvey),
    updateExistingSurey: (updatedSurvey) =>
        updateSurey(updatedSurvey),
    onSaveAsTemplateClick: (surveyToSaveAsTemplate) =>
        saveSurveyAsTemplate(surveyToSaveAsTemplate),
});


const NewSurveyPageContainer = connect(
    null,
    mapDispatchToProps,
)(NewSurveyPage);

export default NewSurveyPageContainer;