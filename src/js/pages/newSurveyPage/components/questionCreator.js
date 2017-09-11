import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditQuestionWrapper from './editQuestionWrapper';
import QuestionWrapper from '../../common/components/questionTemplates/questionWrapper';
import SingleAnswerQuestion from '../../common/components/questionTemplates/singleAnswerQuestion';
import MultiAnswerQuestion from '../../common/components/questionTemplates/multiAnswerQuestion';
import TextAnswerQuestion from '../../common/components/questionTemplates/textAnswerQuestion';
import FileAnswerQuestion from '../../common/components/questionTemplates/fileAnswerQuestion';
import StarRatingAnswerQuestion from '../../common/components/questionTemplates/ratingAnswerQuestion';
import RangeAnswerQuestion from '../../common/components/questionTemplates/rangeAnswerQuestion';
import Button from '../../../common/components/controls/button';
import {Icon} from 'react-fa';
import {
    questionTypesName,
    questionTypesText,
    QUESTION_CREATOR__EDIT_MODE,
    QUESTION_CREATOR__EDIT_MODE_CHANGED,
    QUESTION_CREATOR__VIEW_MODE,
    QUESTION_CREATOR__VIEW_MODE_CHANGED,
} from '../../../types/types';

// TODO: add hash validation for each control.
class QuestionCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: this.props.questionModel,
            mode: QUESTION_CREATOR__EDIT_MODE,
        }

        this.handleQuestionTextChange = this.handleQuestionTextChange.bind(this);
        this.handleToggleRequireFlag = this.handleToggleRequireFlag.bind(this);
        this.handleSaveButtonClick = this.handleSaveButtonClick.bind(this);
        this.handleCancelButtonClick = this.handleCancelButtonClick.bind(this);
        this.handleAnswersChange = this.handleAnswersChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        // debugger;
        const prevMode = this.state.mode;
        const nextMode = this.getDisplayMode(nextProps.isChanged, nextProps.isInEditMode);

        let questionToSet = null;
        if (prevMode === QUESTION_CREATOR__EDIT_MODE && nextMode === QUESTION_CREATOR__EDIT_MODE_CHANGED) {
            questionToSet = this.state.question;
        } else {
            questionToSet = nextProps.questionModel;
        }

        this.setState(prevState => ({
            mode: nextMode,
            question: questionToSet,
        }));
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            (prevState.mode === QUESTION_CREATOR__EDIT_MODE || prevState.mode === QUESTION_CREATOR__EDIT_MODE_CHANGED) && 
            this.state.mode === QUESTION_CREATOR__VIEW_MODE
        ) {
            this.props.onQuestionUpdate(this.state.question);
        }
    }

    getDisplayMode(isChanged, isInEditMode) {
        if (isChanged && isInEditMode) {
            return QUESTION_CREATOR__EDIT_MODE_CHANGED;
        } else if (!isChanged && isInEditMode) {
            return QUESTION_CREATOR__EDIT_MODE;
        } else if (isChanged && !isInEditMode) {
            return QUESTION_CREATOR__VIEW_MODE_CHANGED;
        } else if (!isChanged && !isInEditMode) {
            return QUESTION_CREATOR__VIEW_MODE;
        } 
    }

    addQuestionChangesToState(changedQuestionState) {
        this.setState(prevState => Object.assign({}, prevState, {
            question: changedQuestionState,
            mode: QUESTION_CREATOR__EDIT_MODE_CHANGED,
        }));
    }

    commitChanges(nextState = this.state, callback = () => {}) {
        this.setState(Object.assign({}, nextState, {
            mode: QUESTION_CREATOR__VIEW_MODE,
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

    handleAnswersChange(changedAnswers) {
        const changedQuestionState = Object.assign({}, this.state.question, {
            answers: changedAnswers,
        })
        this.addQuestionChangesToState(changedQuestionState);
    }

    handleSaveButtonClick() {
        this.commitChanges(this.state);
    }

    handleCancelButtonClick() {
        if (this.props.questionModel.answers) {
            this.commitChanges(Object.assign({}, this.state, {
                question: this.props.questionModel,
            }));   
        } else {
            this.props.onDeleteButtonClick();   
        }
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

        const answersToQuestion = this.state.question.answers;
        const questionIsRequired = this.state.question.isRequired;

        const onClick = this.props.onQuestionFocus;
        const questionIsInEditMode = (
            this.state.mode === QUESTION_CREATOR__EDIT_MODE || 
            this.state.mode === QUESTION_CREATOR__EDIT_MODE_CHANGED
        ) ? true : false;
        const isChanged = (
            this.state.mode === QUESTION_CREATOR__EDIT_MODE_CHANGED || 
            this.state.mode === QUESTION_CREATOR__VIEW_MODE_CHANGED
        ) ? true : false;

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
                                           type={questionType}
                                           isRequired={questionIsRequired}
                                           answers={answersToQuestion}
                                           onToggleRequireFlag={() => this.handleToggleRequireFlag()}
                                           onQuestionTextChange={changedText => this.handleQuestionTextChange(changedText)}
                                           onAnswersChange={changedAnswers => this.handleAnswersChange(changedAnswers)}
                                           onSaveButtonClick={() => this.handleSaveButtonClick()}
                                           onCancelButtonClick={() => this.handleCancelButtonClick()}
                    />
                    : <QuestionWrapper id={questionId}
                                       answers={answersToQuestion}
                                       title={questionText}
                                       type={questionType}
                                       onClick={onClick}
                    />             
                }
            </div>
        );
    }
}

QuestionCreator.PropTypes = {
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

QuestionCreator.defaultProps = {
    isInEditMode: false,
    questionModel: {
        questionText: questionTypesText()
    }
}

export default QuestionCreator;

