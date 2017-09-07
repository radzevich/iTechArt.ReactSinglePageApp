import React, { Component } from 'react';
import Question from '../../common/components/question';

class QuestionStateController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChanged: false,
        }

        this.handleQuestionUpdate = this.handleQuestionUpdate.bind(this);
        this.handleQuestionSave = this.handleQuestionSave.bind(this);
        this.handleQuestionCancel = this.handleQuestionCancel.bind(this);
    }

    componentWillReceiveProps

    handleQuestionUpdate() {
        this.setState({
            isChanged: true,
        })
    }

    handleQuestionSave(questionStateToSave) {
        this.props.onQuestionUpdate(questionStateToSave);
    }

    handleQuestionCancel() {
        this.setState({
            isChanged: false,
        })
    }

    render() {
        const isInEditMode = this.props.isInEditMode;
        const questionState = this.props.questionState;

        return(
            <Question question={questionState}
                      isChanged={this.state.isChanged}
                      isInEditMode={isInEditMode} 
                      onQuestionFocus={this.props.onQuestionFocus}
                      onSave={(stateToSave) => this.handleQuestionSave(stateToSave)}
                      onCancel={() => this.handleQuestionCancel()}
                      
            />
        )
    }
}

export default QuestionStateController;