import React, { Component } from 'react';
import Question from '../../common/components/question'

class EditBoard extends Component {
    render() {
        const question = {
            id: 1,
            type: 'single',
            title: 'test question',
            isRequired: true,
            answers: [
                {
                    id: 1,
                    questionId: 1,
                    isChecked: false,
                    text: '1 test answer',
                },
                {
                    id: 2,
                    questionId: 1,
                    isChecked: false,
                    text: '2 test answer',
                },
                {
                    id: 3,
                    questionId: 1,
                    isChecked: true,
                    text: '3 test answer',
                },
                {
                    id: 4,
                    questionId: 1,
                    isChecked: false,
                    text: '4 test answer',
                },
            ]
        }
        return (
            <div className='edit-board'>
                <Question 
                    id={question.id}
                    type={question.type}
                    title={question.type}
                    answers={question.answers}
                />
            </div>
        );
    }
}

export default EditBoard;