import React from 'react';
import PropTypes from 'prop-types';
import Sha1 from 'js-sha1';

function RadioButtonWithLabel(props) {
    const inputType = 'radio';
    const inputName = props.name;
    const inputId = props.id;
    const isChecked = props.isChecked;
    const inputHash = Sha1(inputType + inputName + inputId);

    return (
        <input type={inputType}
               name={inputName}
               id={inputId}
               hash={inputHash}
               isChecked={isChecked ? 'true' : ''}
        >
            <label for={inputId}>props.content</label>
        </input>
    );
}

RadioButtonWithLabel.PropTypes = {
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    isChecked: PropTypes.bool,
}

export default RadioButtonWithLabel;