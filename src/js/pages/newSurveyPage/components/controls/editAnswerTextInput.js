import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ControlledInput from '../../../../common/components/controls/controlledInput';

class EditAnswerTextInput extends PureComponent {
    render() {
        const inputValue = this.props.value;
        const onInputClick = this.props.onClick;

        return (
            <div className='edit-answer-input' onClick={onInputClick}>
                <ControlledInput value = {inputValue}
                                 onInputChange = {this.props.onInputChange}
                />
            </div>
        )
    }
}

EditAnswerTextInput.propTypes = {
    value: PropTypes.string,
    onInputChange: PropTypes.func.isRequired,
    onInputClick: PropTypes.func,
}

EditAnswerTextInput.defaultProps = {
    value: 'Ответ',
    onInputClick: () => {},
}

export default EditAnswerTextInput;