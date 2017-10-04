import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RadioButtonWithLabel from '../../../../common/components/controls/radioButtonWithLabel';

class SingleAnswerQuestion extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const questionId = this.props.questionId;
        return (
            <div className='answers'>
                {this.props.answers.map((item, index) =>
                    <RadioButtonWithLabel id={index}
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

SingleAnswerQuestion.PropTypes = {
    questionId: PropTypes.number.isRequired,
    answers: PropTypes.arrayOf(
        PropTypes.shape({
            isChecked: PropTypes.bool,
            text: PropTypes.string.isRequired,
        })
    )
}

SingleAnswerQuestion.defaultProps = {
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

export default SingleAnswerQuestion;