import React from 'react';
import PropTypes from 'prop-types';
import ControlledInput from '../../../common/components/controls/controlledInput';

function EditPanelTitle(props) {
    const titleText = 'Новый опрос';
    const contentText = 'Опрос № ' + props.surveyNum;
    return (
        <div className='edit-panel__title'>
            <h2>{titleText}</h2>
            <ControlledInput value={'default'}
                             onInputChange={() => {}}/>
        </div>
    );
}

EditPanelTitle.propTypes = {
    surveyNum: PropTypes.number,
}

EditPanelTitle.defaultProps = {
    surveyNum: 0,
}

export default EditPanelTitle;