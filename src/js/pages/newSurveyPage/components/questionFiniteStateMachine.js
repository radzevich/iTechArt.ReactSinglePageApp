import React, { PureComponent } from 'react';
import QuestionCreator from './questionCreator';
import {
    QUESTION_CREATOR__EDIT_MODE,
    QUESTION_CREATOR__EDIT_MODE_CHANGED,
    QUESTION_CREATOR__VIEW_MODE,
    QUESTION_CREATOR__VIEW_MODE_CHANGED,
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
        let questionDisplayMode = this.state.mode;
        // if (this.props.isInEditMode !== nextProps.isInEditMode) {
        //     if (nextProps.isInEditMode) {
        //         if (this.state.mode === QUESTION_CREATOR__VIEW_MODE) {
        //             questionDisplayMode = QUESTION_CREATOR__EDIT_MODE;
        //         } else {
        //             questionDisplayMode = QUESTION_CREATOR__EDIT_MODE_CHANGED;
        //         }
        //     } else {
        //         if (this.state.mode === QUESTION_CREATOR__EDIT_MODE) {
        //             questionDisplayMode = QUESTION_CREATOR__VIEW_MODE;
        //         } else {
        //             questionDisplayMode = QUESTION_CREATOR__VIEW_MODE_CHANGED;
        //         }
        //     }
        // }
        // this.setState({
        //     mode: questionDisplayMode,
        // })
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
        this.setState({
            mode: questionDisplayMode,
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.mode === QUESTION_CREATOR__EDIT_MODE_CHANGED && this.state.mode === QUESTION_CREATOR__VIEW_MODE) {
            this.props.onQuestionUpdate(this.state.question);
        }
    }

    handleQuestionUdate(updatedQuestion) {
        this.setState({
            mode: QUESTION_CREATOR__EDIT_MODE_CHANGED,
            question: updatedQuestion,
        });
    }

    handleQuestionSave() {
        if (this.state.mode === QUESTION_CREATOR__EDIT_MODE_CHANGED) {
            this.commitState();
        //* In case user try to save or cancel not updated question form 
        //* we should first mark it as updated (switch to QUESTION_CREATOR__EDIT_MODE_CHANGED mode)
        //* and then invoke commiting of our question state.
        } else {
            this.setState({
                mode: QUESTION_CREATOR__EDIT_MODE_CHANGED,
            }, this.commitState());
        }
    }

    handleQuestionCancel() {
        this.setState({
            mode: QUESTION_CREATOR__VIEW_MODE,
            question: this.props.question,
        })
    }

    commitState() {
        this.setState({
            mode: QUESTION_CREATOR__VIEW_MODE,
        })
    }

    render() {
        const question = (this.state.mode === QUESTION_CREATOR__EDIT_MODE_CHANGED || this.state.mode === QUESTION_CREATOR__VIEW_MODE_CHANGED) 
            ? this.state.question
            : this.props.question;
        const isInEditMode = (this.state.mode === QUESTION_CREATOR__EDIT_MODE || this.state.mode === QUESTION_CREATOR__EDIT_MODE_CHANGED) 
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