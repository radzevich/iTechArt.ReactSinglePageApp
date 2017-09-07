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
import Button from '../../../common/components/controls/button';
import {Icon} from 'react-fa';
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
            question: this.props.questionModel,
            isChanged: false,
        }

        this.handleQuestionTextChange = this.handleQuestionTextChange.bind(this);
        this.handleToggleRequireFlag = this.handleToggleRequireFlag.bind(this);
        this.handleSaveButtonClick = this.handleSaveButtonClick.bind(this);
        this.handleCancelButtonClick = this.handleCancelButtonClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        let questionToSet = nextProps.questionModel;
        if (this.state.isChanged) {
            questionToSet = this.state.question;
        }
        this.setState(prevState => ({
            isInEditMode: nextProps.isInEditMode,
            question: questionToSet,
        }));
    }

    componentDidUpdate(prevProps, prevState) {
        if ((this.state.isChanged !== prevState.isChanged) &&
            (!this.state.isChanged)) {
                this.props.onQuestionUpdate(this.state.question);
        }
    }

    addQuestionChangesToState(changedQuestionState) {
        this.setState(prevState => Object.assign({}, prevState, {
            question: changedQuestionState,
            isChanged: true,
        }));
    }

    commitChanges(nextState = this.state, callback = () => {}) {
        this.setState(Object.assign({}, nextState, {
            isChanged: false,
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
        this.commitChanges(this.state);
    }

    handleCancelButtonClick() {
        this.commitChanges(Object.assign({}, this.state, {
            question: this.props.questionModel,
        }));
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
        const isChanged = this.state.isChanged;

        const editIcon = <Icon name='pencil-square'/>;
        const deleteIcon = <Icon name='trash'/>;

        return (
            <div>
                {(isChanged) && <span>!</span>}
                <div className='question__manage-buttons'>
                    <Button content={editIcon}
                            onClick={onClick}
                    />
                    <Button content={deleteIcon}
                            onClick={this.props.onDeleteButtonClick}
                    />
                </div>
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
    questionModel: PropTypes.shape({
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
    questionModel: {
        questionText: questionTypesText()
    }
}

export default Question;

