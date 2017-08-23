import React from 'react';
import {Icon} from 'react-fa';
import PropTypes from 'prop-types';

function QuestionTypeOption(props) {
    return (
        <div className="question-type-option"
             onClick={() => props.onClick(props.id)}>
            <Icon name={props.iconName} />
            <span className="question-type-option__text">{props.text}</span>
        </div>
    );
}

QuestionTypeOption.PropTypes = {
    id: PropTypes.number.isRequired,
    iconName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default QuestionTypeOption;