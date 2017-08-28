import { connect } from 'react-redux';
import EditPanel from '../components/editPanel';
import {
    saveAsTemplate,
    saveChangesInSurvey,
    backupState,
    createNewPage,
} from '../../../actions/index';

const mapDispatchToProps = dispatch => {
    return {
        onSaveAsClick: () => {
            dispatch(saveAsTemplate())
        },
        onSaveChangesClick: () => {
            dispatch(saveChangesInSurvey())
        },
        onCancelClick: () => {
            dispatch(backupState())
        },
        onCreateClick: () => {
            dispatch(createNewPage())
        },
    };
}


const EditPanelContainer = connect(
    mapDispatchToProps,
)(EditPanel);

export default EditPanelContainer;