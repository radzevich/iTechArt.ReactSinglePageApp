import PropTypes from 'prop-types';
import React from 'react';

function SurveyParamsListItem(props) {
    const id = props.id;
    const inputType = 'checkbox';
    return (
        <li>
            <input type={inputType}
                   onClick={() => props.onClick(id)}
                   name={props.name}
                   id={id}
            />
            <label for={props.id}>{props.text}</label>
        </li>
    );
}

SurveyParamsListItem.PropTypes = {
    onClick: PropTypes.func.isRequired,
    name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default SurveyParamsListItem;