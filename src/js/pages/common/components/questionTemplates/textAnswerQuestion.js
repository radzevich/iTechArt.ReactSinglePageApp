import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextAnswerQuestion extends Component {
    render() {
        const inputType = 'text';
        const questionId = this.questionId;
        return (
            <div>
                <input type={inputType}
                       name={questionId}
                />
            </div>
        );
    }
}

TextAnswerQuestion.propTypes = {
    questionId: PropTypes.number.isRequired,
}

TextAnswerQuestion.propTypes = {
    questionId: 0,
}

export default TextAnswerQuestion;