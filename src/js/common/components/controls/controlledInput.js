import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ControlledInput extends PureComponent {
    handleChange(event) {
        this.props.onInputChange(event.target.value);
    }

    render() {
        const inputType = 'text';
        const valueToEdit = this.props.value;
        return (
            <input value={valueToEdit}
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