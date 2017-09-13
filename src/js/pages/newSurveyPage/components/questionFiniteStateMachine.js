import React, { PureComponent } from 'react';
import QuestionCreator from './questionCreator';
import {
    QUESTION_CREATOR__EDIT_MODE,
    QUESTION_CREATOR__EDIT_MODE_CHANGED,
    QUESTION_CREATOR__VIEW_MODE,
    QUESTION_CREATOR__VIEW_MODE_CHANGED,
    QUESTION_CREATOR__QUESTION_WAS_UPDATED, 
    QUESTION_CREATOR__QUESTION_WAS_COMMITED, 
} from '../../../types/types';

class QuestionFiniteStateMachine extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            mode: QUESTION_CREATOR__EDIT_MODE,
            question: props.question,
        }

        this.handleQuestionCancel = this.handleQuestionCancel.bind(this);
        this.handleQuestionSave = this.handleQuestionSave.bind(this);
        this.handleQuestionUdate = this.handleQuestionUdate.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        let questionDisplayMode = QUESTION_CREATOR__VIEW_MODE;
        if ((this.props.activeQuestionIndex === this.state.question.id) ^ (nextProps.activeQuestionIndex === this.state.question.id)) {
            if (nextProps.activeQuestionIndex === null) {
                questionDisplayMode = QUESTION_CREATOR__VIEW_MODE;
            } else if (this.props.activeQuestionIndex === this.state.question.id) {
                if (this.state.mode === QUESTION_CREATOR__EDIT_MODE) {
                    questionDisplayMode = QUESTION_CREATOR__VIEW_MODE;
                } else {
                    questionDisplayMode = QUESTION_CREATOR__VIEW_MODE_CHANGED;
                }
            } else if (nextProps.activeQuestionIndex === this.state.question.id) {
                if (this.state.mode === QUESTION_CREATOR__VIEW_MODE) {
                    questionDisplayMode = QUESTION_CREATOR__EDIT_MODE;
                } else {
                    questionDisplayMode = QUESTION_CREATOR__EDIT_MODE_CHANGED;
                }
            }
        }

        let questionToDisplay = this.props.question;
        if (this.state.mode === QUESTION_CREATOR__EDIT_MODE_CHANGED || this.state.mode === QUESTION_CREATOR__VIEW_MODE_CHANGED) {
            questionToDisplay = this.state.question;
        }

        this.setState({
            mode: questionDisplayMode,
            question: questionToDisplay,
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.mode === QUESTION_CREATOR__EDIT_MODE_CHANGED && this.state.mode === QUESTION_CREATOR__VIEW_MODE) {
            this.props.onQuestionUpdate(this.state.question);
        } else if (prevState.mode === QUESTION_CREATOR__EDIT_MODE && this.state.mode === QUESTION_CREATOR__EDIT_MODE_CHANGED) {
            this.props.onQuestionChangesFixed(QUESTION_CREATOR__QUESTION_WAS_UPDATED);
        }
    }

    handleQuestionUdate(updatedQuestion) {
        this.setState({
            mode: QUESTION_CREATOR__EDIT_MODE_CHANGED,
            question: updatedQuestion,
        });
    }

    handleQuestionSave() {
        this.props.onQuestionUpdate(this.state.question);
        this.props.onQuestionChangesFixed(QUESTION_CREATOR__QUESTION_WAS_COMMITED);
    }

    handleQuestionCancel() {
        this.props.onQuestionUpdate(this.props.question);
        this.props.onQuestionChangesFixed(QUESTION_CREATOR__QUESTION_WAS_COMMITED);
    }

    commitState() {
        this.setState({
            mode: QUESTION_CREATOR__VIEW_MODE,
        })
    }

    render() {
        // debugger;
        const question = this.state.question;
        const isInEditMode = ((this.state.mode === QUESTION_CREATOR__EDIT_MODE || this.state.mode === QUESTION_CREATOR__EDIT_MODE_CHANGED) && this.props.activeQuestionIndex !== null) 
            ? true
            : false;
        const isChanged = (this.state.mode === QUESTION_CREATOR__EDIT_MODE_CHANGED || this.state.mode === QUESTION_CREATOR__VIEW_MODE_CHANGED) 
            ? true
            : false;
        return <QuestionCreator question={question}
                                isInEditMode={isInEditMode}
                                isChanged={isChanged}
                                onQuestionFocus={this.props.onQuestionFocus}
                                onDeleteButtonClick={this.props.onDeleteButtonClick}
                                onSaveButtonClick={() => this.handleQuestionSave()}
                                onCancelButtonClick={() => this.handleQuestionCancel()}
                                onQuestionUpdate={(updatedQuestion) => this.handleQuestionUdate(updatedQuestion)}

        />
    }   
}

export default QuestionFiniteStateMachine;