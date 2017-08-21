import React from 'react';
import {Icon} from 'react-fa';

function EditButtons(props) {
    return (
        <div className="template-item__edit-buttons">
            <Icon name="pencil-square"/>
            <Icon name="trash"/>
        </div>
    )
}

export default EditButtons;