import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuestionWrapper from './questionTemplates/questionWrapper';
import SingleAnswerQuestion from './questionTemplates/singleAnswerQuestion';

// TODO: add hash validation for each control.
class Question extends Component {
    render() {
        const answers = (questionType, answers) => {
            switch(questionType) {
                case 'single':
                    return (<SingleAnswerQuestion answers={answers}/>);
                case 'multy':
                    return null;
                case 'text':
                    return null;
                case 'file':
                    return null;
                case 'starRating':
                    return null;
                case 'scale':
                    return null;
            }
        }
        return (
            <QuestionWrapper 
                id={this.props.id}
                title={this.props.title}
                type={this.props.type}
                answers={answers(this.props.type, this.props.answers)}
            />
        );
    }
}

Question.PropTypes = {
    questionType: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
}

export default Question

