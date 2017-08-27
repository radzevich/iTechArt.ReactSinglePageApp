import React from 'react';
import PropTypes from 'prop-types';
import Sha1 from 'js-sha1';

function CheckboxWithLabel(props) {
    const inputType = 'checkbox';
    const inputName = props.name;
    const inputId = props.id;
    const isChecked = props.isChecked;
    const inputHash = Sha1(inputType + inputName + inputId);

    return (
        <div>
            <input type={inputType}
                   name={inputName}
                   id={inputId}
            />
            <label htmlFor={inputId}>{props.content}</label>
        </div>
    );
}

CheckboxWithLabel.PropTypes = {
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

export default CheckboxWithLabel;