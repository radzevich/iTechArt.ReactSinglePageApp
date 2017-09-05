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
            thereAreNotSavedChanges: false,
        }

        this.handleQuestionTextChange = this.handleQuestionTextChange.bind(this);
        this.handleToggleRequireFlag = this.handleToggleRequireFlag.bind(this);
        this.handleSaveButtonClick = this.handleSaveButtonClick.bind(this);
        this.handleCancelButtonClick = this.handleCancelButtonClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        let questionToSet = nextProps.infoToCreateQuestion;
        if (this.state.thereAreNotSavedChanges) {
            questionToSet = this.state.question;
        }
        this.setState(Object.assign({}, this.state, {
            isInEditMode: nextProps.isInEditMode,
            question: questionToSet,
        }));
    }  

    addQuestionChangesToState(changedQuestionState) {
        this.setState(prevState => Object.assign({}, prevState, {
            question: changedQuestionState,
            thereAreNotSavedChanges: true,
        }));
    }

    commitChanges(callback = () => {}) {
        this.setState(Object.assign({}, this.state, {
            thereAreNotSavedChanges: false,
        }), callback());
    }

    handleToggleRequireFlag() {
        const changedQuestionState = Object.assign({}, this.state.question, {
            isRequired: !this.state.question.isRequired,
        });
        this.addQuestionChangesToState(changedQuestionState);
    }

    handleQuestionTextChange(changedTextToSet) {
        const changedQuestionState = Object.assign({}, this.state.question, {
            text: changedTextToSet,
        });
        this.addQuestionChangesToState(changedQuestionState);
    }

    handleSaveButtonClick() {
        this.props.onQuestionUpdate(Object.assign({}, this.state.question));
        this.commitChanges();
    }

    handleCancelButtonClick() {
        this.props.onQuestionUpdate(this.props.infoToCreateQuestion);
        this.commitChanges();
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
        const questionId = this.state.question.id;
        const questionText = this.state.question.text;
        const questionType = this.state.question.type;
        const questionIsRequired = this.state.question.isRequired;
        const onClick = this.props.onQuestionFocus;
        const questionIsInEditMode = this.state.isInEditMode;
        const thereAreNotSavedChanges = this.state.thereAreNotSavedChanges;

        return (
            <div>
                {(thereAreNotSavedChanges) && <span>!</span>}
                {(questionIsInEditMode)
                    ? <EditQuestionWrapper id={questionId}
                                           text={questionText}  
                                           isRequired={questionIsRequired}
                                           onToggleRequireFlag={() => this.handleToggleRequireFlag()}
                                           onQuestionTextChange={changedText => this.handleQuestionTextChange(changedText)}
                                           onSaveButtonClick={() => this.handleSaveButtonClick()}
                                           onCancelButtonClick={() => this.handleCancelButtonClick()}
                    />
                    : <QuestionWrapper id={questionId}
                                       title={questionText}
                                       type={questionType}
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

