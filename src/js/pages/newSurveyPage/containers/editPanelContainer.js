import { connect } from 'react-redux';
import EditPanel from '../components/editPanel';
import {
    saveAsTemplate,
    saveChangesInSurvey,
    backupState,
    createNewPage,
} from '../../../actions/index';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSaveAsClick: () => {
            dispatch(saveAsTemplate(ownProps.surveyToEdit))
        },
        onSaveChangesClick: () => {
            dispatch(saveChangesInSurvey(ownProps.surveyToEdit))
        },
        onCancelClick: () => {
            dispatch(backupState())
        },
        onCreatePageClick: () => {
            dispatch(createNewPage())
        },
    };
}

const EditPanelContainer = connect(
    mapDispatchToProps,
)(EditPanel);

export default EditPanelContainer;