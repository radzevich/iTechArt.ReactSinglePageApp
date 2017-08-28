import { 
    connect 
} from 'react-redux';
import { 
    TOGGLE_ANON_STATUS,
    TOGGLE_QUESTION_ORDER,
    TOGGLE_SHOW_PAGE_NUMS,
    TOGGLE_SHOW_PROGRESS_BAR,
    TOGGLE_SHOW_QUESTION_NUMS,
    TOGGLE_SHOW_REQUIRED_QUESTION_MARK,
    questionTypesName,
    questionTypesTitle, 
} from '../../../types/types'; 
import NewSurveyPage from '../components';

const mapStateToProps = (ownProps, state) => {
    const currentSurveyId = ownProps.id;
    const currentSurvey = state.surveys[currentSurveyId];
    return {
        editPanelProps: Object.assign({}, {
            pages: [...[], 
                currentSurvey.pages
            ],
            pagesCount: currentSurvey.pagesCount,
            questionsCount: currentSurvey.questionsCount,
        }),
        questionsTypesPanel: 
        // surveyOptionsPanel: 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        questionsTypesPanelEvents: {
            onSaveAsClick: templateId => {
                // dispatch(saveAsTemplate(templateId));
                console.log('saveAs');
            },
            onSaveChangesClick: templateId => {
                // saveChangesInSurvey(templateId)
                console.log('save');
            },
            onCancelClick: templateId => {
                // backupState(templateId)
                console.log('cancel');
            },
            onCreateClick: templateId => {
                // createNewPage(templateId)
                console.log('create');
            },
        },
    };
}

const NewSurveyPageContainer = connect(
    mapStateToProps,
)(NewSurveyPage);

export default NewSurveyPageContainer;