import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ControlledCheckbox extends PureComponent {
    handleChange(event) {
        this.props.onToggle(event.target.value);
    }

    render() {
        const inputType = 'checkbox';
        const isChecked = this.props.isChecked;
        return (
            <input isChecked={isChecked}
                   onChange={this.handleChange}/>
        );
    }
}

ControlledInput.propTypes = {
    value: PropTypes.string,
    onInputChange: PropTypes.func.isRequired,
}

ControlledInput.defaultProps = {
    value: '',
}

export default ControlledInput;