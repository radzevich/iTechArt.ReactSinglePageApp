import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Sha1 from 'js-sha1';

class CheckboxWithLabel extends PureComponent {
    handleChange(event) {
        this.props.onToggle(event.target.value);
    }

    render() {
        const inputType = 'checkbox';
        const inputId = this.props.id;
        const isChecked = this.props.isChecked;
        const labelText = this.props.labelText;
        const onToggle = this.props.onToggle;

        return (
            <div>
                <input type={inputType}
                       onChange={() => onToggle()}
                       checked={isChecked}
                />
                <label htmlFor={inputId}>{labelText}</label>
            </div>
        );
    }
}

CheckboxWithLabel.PropTypes = {
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,       
    ]),
    isChecked: PropTypes.bool,
    onToggle: PropTypes.func,
}

CheckboxWithLabel.defaultProps = {
    onToggle: () => {},
    id: 0,
}

export default CheckboxWithLabel;