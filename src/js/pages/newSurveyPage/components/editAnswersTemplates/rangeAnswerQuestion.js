import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditAnswerTextInput from '../controls/editAnswerTextInput';
import { 
    RANGE_QUESTION__MIN_VALUE_ID,
    RANGE_QUESTION__MAX_VALUE_ID, 
    RANGE_QUESTION__USER_VALUE_ID,
    RANGE_QUESTION__DEFAULT_MIN_VALUE,
    RANGE_QUESTION__DEFAULT_MAX_VALUE,
    RANGE_QUESTION__DEFAULT_USER_VALUE,
 } from '../../../../types/types'

class FileAnswerQuestion extends Component {
    constructor(props) {
        super(props);
        this.handleRangeValueChange = this.handleRangeValueChange.bind(this);
    }

    handleRangeValueChange(event) {
        this.props.onValueEdit(RANGE_QUESTION__USER_VALUE_ID, event.target.value);
    }

    render() {
        const inputType = 'range';
        const inputName = this.props.name;
        const minValue = this.props.answers[RANGE_QUESTION__MIN_VALUE_ID].value;
        const maxValue = this.props.answers[RANGE_QUESTION__MAX_VALUE_ID].value;
        const userValue = this.props.answers[RANGE_QUESTION__USER_VALUE_ID].value;

        return (
            <div>
                <form>
                    <EditAnswerTextInput id={RANGE_QUESTION__MIN_VALUE_ID + ''}
                                         value={minValue}
                                         onInputChange={(changedInputValue) => this.props.onValueEdit(RANGE_QUESTION__MIN_VALUE_ID, changedInputValue)}
                    />
                    <input type={inputType}
                           id={RANGE_QUESTION__USER_VALUE_ID + ''}
                           name={inputName}
                           min={minValue}
                           max={maxValue}
                           value={userValue}
                           onChange={this.handleRangeValueChange}
                    />
                    <EditAnswerTextInput id={RANGE_QUESTION__MAX_VALUE_ID + ''}
                                         value={maxValue}
                                         onInputChange={(changedInputValue) => this.props.onValueEdit(RANGE_QUESTION__MAX_VALUE_ID, changedInputValue)}
                    />
                </form>
            </div>
        );
    }
}

FileAnswerQuestion.defaultProps = {
    name: '',
}

FileAnswerQuestion.propTypes = {
    name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    answers: PropTypes.array.isRequired,
    onValueEdit: PropTypes.func.isRequired,
}

export default FileAnswerQuestion;