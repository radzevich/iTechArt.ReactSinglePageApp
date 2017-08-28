import { connect } from 'react-redux';
import NewSurveyPage from '../components/newSurveyPage';
import {
    createSurvey,
    saveAsTemplate,
    saveChangesInSurvey,
    backupState,
    createNewPage,
} from '../../../actions/index';

const mapStateToProps = state => {
    const surveyToCreate = state.surveyToCreate;
    return {
        editPanelProps: Object.assign({}, {
            pages: [
                ...[], 
                surveyToCreate.pages,
            ],
            pagesCount: surveyToCreate.pagesCount,
            questionsCount: surveyToCreate.questionsCount,
        }),
        // questionsTypesPanel: 
        // // surveyOptionsPanel: 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        questionsTypesPanelEvents: {
            onSaveAsClick: () => {
                dispatch(saveAsTemplate());
            },
            onSaveChangesClick: () => {
                dispatch(saveChangesInSurvey());
            },
            onCancelClick: () => {
                dispatch(backupState());
            },
            onCreateClick: () => {
                dispatch(createNewPage());
            },
        },
    };
}

const NewSurveyPageContainer = connect(
    mapStateToProps,
)(NewSurveyPage);

export default NewSurveyPageContainer;