import React from 'react';
import {Icon} from 'react-fa';
import PropTypes from 'prop-types';

function QuestionTypesOption(props) {
    return (
        <div className="question-type-option"
             onClick={() => props.onClick()}>
            <Icon name={props.iconName} />
            <span className="question-type-option__text">{props.title}</span>
        </div>
    );
}

QuestionTypesOption.PropTypes = {
    // iconName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default QuestionTypesOption;