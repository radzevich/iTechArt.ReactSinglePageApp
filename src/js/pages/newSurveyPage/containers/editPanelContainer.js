import { connect } from 'react-redux';
import EditPanel from '../components/editPanel';
import {
    saveAsTemplate,
    saveChangesInSurvey,
    backupState,
    createNewPage,
} from '../../actions/index';

const mapDispatchToProps = dispatch => {
    return {
        onSaveAsClick: {
            saveAsTemplate()
        },
        onSaveChangesClick: {
            saveChangesInSurvey()
        },
        onCancelClick: {
            backupState()
        },
        onCreateClick: {
            createNewPage()
        },
    };
}