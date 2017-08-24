import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sha1 from 'js-sha1';

class FileAnswerQuestion extends Component {
    render() {
        const inputType = 'file';
        const inputName = this.props.info.questionId;
        const inputValue = this.props.info.value;
        const inputMin = this.props.info.min;
        const inputMax = this.props.info.max;
        const answerHash = Sha1(inputType + inputName + inputMin + inputMax);
        return (
            <div>
                <input type={inputType}
                       name={inputName}
                       hash={answerHash}
                />
            </div>
        );
    }
}

SingleAnswerQuestion.PropTypes = {
    info: PropTypes.shape({
        questionId: PropTypes.number.isRequired,
        isChecked: PropTypes.bool,
    })
}

export default FileAnswerQuestion;