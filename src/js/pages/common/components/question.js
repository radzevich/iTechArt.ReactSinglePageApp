import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditQuestionWrapper from './questionTemplates/editQuestionWrapper';
import QuestionWrapper from './questionTemplates/questionWrapper';
import SingleAnswerQuestion from './questionTemplates/singleAnswerQuestion';
import MultiAnswerQuestion from './questionTemplates/multiAnswerQuestion';
import TextAnswerQuestion from './questionTemplates/textAnswerQuestion';
import FileAnswerQuestion from './questionTemplates/fileAnswerQuestion';
import StarRatingAnswerQuestion from './questionTemplates/ratingAnswerQuestion';
import RangeAnswerQuestion from './questionTemplates/rangeAnswerQuestion';
import {
    questionTypesName,
    questionTypesText,
} from '../../../types/types';

// TODO: add hash validation for each control.
class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isInEditMode: this.props.isInEditMode,
            question: this.props.infoToCreateQuestion,
        }

        this.handleQuestionTextChange = this.handleQuestionTextChange.bind(this);
        this.handleToggleRequireFlag = this.handleToggleRequireFlag.bind(this);
        this.handleSaveButtonClick = this.handleSaveButtonClick.bind(this);
        this.handleCancelButtonClick = this.handleCancelButtonClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps);
    }  

    handleToggleRequireFlag() {
        this.setState(prevState => Object.assign({}, prevState, {
            question: Object.assign({}, prevState.question, {
                isRequired: !prevState.question.isRequired,
            })
        }));
    }

    handleQuestionTextChange(changedTextToSet) {
        this.setState(prevState => Object.assign({}, prevState, {
            question: Object.assign({}, prevState.question, {
                text: changedTextToSet,
            })
        }))
    }

    handleSaveButtonClick() {
        this.props.onQuestionUpdate(this.state.question);
    }

    handleCancelButtonClick() {
        this.props.onQuestionUpdate(this.props.infoToCreateQuestion);
    }

    getAnswersModelByQuestionType(questionType) {
        switch(questionType) {
            case questionTypesName.SINGLE:
                return (<SingleAnswerQuestion />);
            case questionTypesName.MULTI:
                return (<MultiAnswerQuestion />);
            case questionTypesName.TEXT:
                return (<TextAnswerQuestion />);
            case questionTypesName.FILE:
                return (<FileAnswerQuestion />);
            case questionTypesName.RATING:
                return (<StarRatingAnswerQuestion />);
            case questionTypesName.RANGE:
                return (<RangeAnswerQuestion />);
        }
    }

    render() {
        const question = this.state.question;
        const onClick = this.props.onQuestionFocus;
        const questionIsInEditMode = this.state.isInEditMode;

        return (
            <div>
                {(questionIsInEditMode)
                    ? <EditQuestionWrapper id={question.id}
                                           text={question.text}  
                                           isRequired={question.isRequired}
                                           onToggleRequireFlag={() => this.handleToggleRequireFlag()}
                                           onQuestionTextChange={changedText => this.handleQuestionTextChange(changedText)}
                                           onSaveButtonClick={() => this.handleSaveButtonClick()}
                                           onCancelButtonClick={() => this.handleCancelButtonClick()}
                    />
                    : <QuestionWrapper id={question.id}
                                       title={question.text}
                                       type={question.type}
                                       onClick={onClick}
                    />             
                }
            </div>
        );
    }
}

Question.PropTypes = {
    infoToCreateQuestion: PropTypes.shape({
        id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]).isRequired,
        isRequired: PropTypes.bool,
        questionText: PropTypes.string,
    }),
    isInEditMode: PropTypes.bool,
}

Question.defaultProps = {
    isInEditMode: false,
    infoToCreateQuestion: {
        questionText: questionTypesText()
    }
}

export default Question;

