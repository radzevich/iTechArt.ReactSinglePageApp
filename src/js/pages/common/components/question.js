import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuestionWrapper from './questionTemplates/questionWrapper';
import SingleAnswerQuestion from './questionTemplates/singleAnswerQuestion';
import MultiAnswerQuestion from './questionTemplates/multiAnswerQuestion';
import TextAnswerQuestion from './questionTemplates/textAnswerQuestion';
import FileAnswerQuestion from './questionTemplates/fileAnswerQuestion';
import StarRatingAnswerQuestion from './questionTemplates/ratingAnswerQuestion';
import RangeAnswerQuestion from './questionTemplates/rangeAnswerQuestion';

// TODO: add hash validation for each control.
class Question extends Component {
    render() {
        const answers = (questionType, answers) => {
            switch(questionType) {
                case 'single':
                    return (<SingleAnswerQuestion answers={answers}/>);
                case 'multi':
                    return (<MultiAnswerQuestion answers={answers}/>);
                case 'text':
                    return (<TextAnswerQuestion answers={answers}/>);
                case 'file':
                    return (<FileAnswerQuestion answers={answers}/>);
                case 'starRating':
                    return (<StarRatingAnswerQuestion answers={answers}/>);
                case 'range':
                    return (<RangeAnswerQuestion answers={answers}/>);
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

