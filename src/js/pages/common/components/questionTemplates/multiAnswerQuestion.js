import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckboxWithLabel from '../../../../common/components/controls/checkboxWithLabel';

class MultiAnswerQuestion extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const questionId = this.props.questionId;
        return (
            <div className='answers'>
                {this.props.answers.map((item, index) =>
                    <CheckboxWithLabel id={index}
                                        name={questionId}
                                        isChecked={item.IsChecked}
                                        content={item.text}
                                        key={item.text}
                    />
                )}
            </div>
        );
    }
}

MultiAnswerQuestion.PropTypes = {
    questionId: PropTypes.number.isRequired,
    answers: PropTypes.arrayOf(
        PropTypes.shape({
            isChecked: PropTypes.bool,
            text: PropTypes.string.isRequired,
        })
    )
}

MultiAnswerQuestion.defaultProps = {
    questionId: -1,
    answers: [
        {
            isChecked: false,
            text: 'Ответ 1',
        },
        {
            isChecked: false,
            text: 'Ответ 2',
        },
        {
            isChecked: false,
            text: 'Ответ 3',
        },
    ],
}

export default MultiAnswerQuestion;