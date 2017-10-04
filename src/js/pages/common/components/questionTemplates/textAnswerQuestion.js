import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextAnswerQuestion extends Component {
    render() {
        const inputType = 'text';
        const questionId = this.questionId;
        return (
            <div>
                <input type={inputType} />
            </div>
        );
    }
}

export default TextAnswerQuestion;