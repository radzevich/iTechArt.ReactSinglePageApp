import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sha1 from 'js-sha1';

class QuestionWrapper extends Component {
    render() {
        const questionId = this.props.id;
        const questionType = this.props.type;
        const isRequired = this.props.isRequired;
        const questionTypeHash = Sha1(questionId + questionType + isRequired);

        return (
            <div>
                <h4>{this.props.title}</h4>
                <form className="form" 
                      id={questionId}
                      type={questionType}
                      isRequired={isRequired}
                      hash={questionTypeHash}
                >
                    {this.props.answers}
                </form>
            </div>
        );
    }
}

export default QuestionWrapper;