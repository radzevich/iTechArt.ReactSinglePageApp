import PropTypes from 'prop-types';
import React from 'react';

function SurveyOptionsListItem(props) {
    const inputType = 'checkbox';
    return (
        <li>
            <input id={props.id}
                   type={inputType}
                   onClick={() => props.onToggle()}
                   name={props.name}
                   
            />
            <label for={props.id}>{props.text}</label>
        </li>
    );
}

SurveyOptionsListItem.PropTypes = {
    onToggle: PropTypes.func.isRequired,
    name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    text: PropTypes.string.isRequired,
}

export default SurveyOptionsListItem;