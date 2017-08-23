import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sha1 from 'js-sha1';

class RatingAnswerQuestion extends Component {
    renderStar() {
        const modificator = (this.props.index % 2 == 0) ? 'full' : 'half';
        const starId = this.props.starIndex + modificator;

        const inputType = 'checkbox';
        const inputName = this.props.info.questionId;
        const isChecked = this.props.info.isChecked;
        const answerHash = Sha1(inputType + inputName + starId);
        return (
            <div>
                <input class="rating-input" 
                    type="radio" 
                    id={starId} 
                    isChecked={isChecked ? 'true' : ''}
                    name="{NAME}"
                    hash={answerHash}
                /> 
                <label class="rating-label half" 
                    for={starId}  
                />    
            </div>    
        );
    }

    render() {
        return renderStar();
    }
}

RatingAnswerQuestion.PropTypes = {
    info: PropTypes.shape({
        questionId: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        isChecked: PropTypes.bool,
        text: PropTypes.string.isRequired,
    })
}

export default RatingAnswerQuestion;