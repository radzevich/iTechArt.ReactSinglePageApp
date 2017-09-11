import React, { PureComponent } from 'react';
import QuestionCreator from 'questionCreator';
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
        }
    }

    componentWillReceiveProps(nextProps) {
        let questionDisplayMode = this.state.mode;
        if (this.props.isInEditMode !== nextProps.isInEditMode) {
            if (nextProps.isInEditMode) {
                if (this.state.mode === QUESTION_CREATOR__VIEW_MODE) {
                    questionDisplayMode = QUESTION_CREATOR__EDIT_MODE;
                } else {
                    questionDisplayMode = QUESTION_CREATOR__EDIT_MODE_CHANGED;
                }
            } else {
                if (this.state.mode === QUESTION_CREATOR__EDIT_MODE) {
                    questionDisplayMode = QUESTION_CREATOR__VIEW_MODE;
                } else {
                    questionDisplayMode = QUESTION_CREATOR__VIEW_MODE_CHANGED;
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

    handleQuestionEdit() {
        this.setState({
            mode: QUESTION_CREATOR__EDIT_MODE_CHANGED,
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
        })
    }

    commitState() {
        this.setState({
            mode: QUESTION_CREATOR__VIEW_MODE,
        })
    }

    render() {
        return <QuestionCreator />
    }   
}