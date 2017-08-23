import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sha1 from 'js-sha1';

class SingleAnswerQuestion extends Component {
    render() {
        const inputType = 'radio';
        const inputName = this.props.info.questionId;
        const inputId = this.props.info.id;
        const isChecked = this.props.info.isChecked;
        const answerHash = Sha1(inputType + inputName + inputId);
        return (
            <div>
                <input className='survey-input__radio'
                       type={inputType}
                       name={inputName}
                       id={inputId}
                       hash={answerHash}
                       isChecked={this.props.isChecked ? 'true' : ''}
                />
                <label class="survey-input__label">
                    {this.props.info.text}
                </label>
            </div>
        );
    }
}

SingleAnswerQuestion.PropTypes = {
    info: PropTypes.shape({
        questionId: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        isChecked: PropTypes.bool,
        text: PropTypes.string.isRequired,
    })
}

export default SingleAnswerQuestion;