import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RadioButton from '../../../../common/components/controls/radioButtonWithLabel';

class SingleAnswerQuestion extends Component {
    render() {
        return (
            <div className='answers'>
                {this.props.answers.map(item =>
                    <RadioButton id={item.id}
                                 name={item.questionId}
                                 isChecked={item.IsChecked}
                                 content={item.text}
                                 key={item.id}
                    />
                )}
            </div>
        );
    }
}

SingleAnswerQuestion.PropTypes = {
    answers: PropTypes.arrayOf(
        PropTypes.shape({
            questionId: PropTypes.number.isRequired,
            id: PropTypes.number.isRequired,
            isChecked: PropTypes.bool,
            text: PropTypes.string.isRequired,
        })
    )
}

export default SingleAnswerQuestion;