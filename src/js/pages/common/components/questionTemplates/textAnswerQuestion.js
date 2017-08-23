import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sha1 from 'js-sha1';

class TextAnswerQuestion extends Component {
    render() {
        const inputType = 'text';
        const inputName = this.props.info.questionId;
        const answerHash = Sha1(inputType + inputName);
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

export default TextAnswerQuestion;