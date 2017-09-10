import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-fa';

class RatingAnswerQuestion extends Component {
    renderStar(starIndex, isChecked) {
        const modificator = (starIndex % 2 == 0) ? 'full' : 'half';
        const inputType = 'checkbox';
        const starIcon = (modificator) 
            ? <Icon className='rating-label half' name='star-half-o'/>
            : <Icon className='rating-label full' name='star'/>

        return (
            <div>
                <input class="rating-input" 
                    type="radio" 
                    id={starIndex} 
                    isChecked={isChecked ? 'true' : ''}
                    name="{NAME}"
                    hash={answerHash}
                /> 
                {starIcon} 
            </div> 
        )
    }

    get renderedStars() {
        const starsNum = 5;
        const arrayOfRenderedStars = [];

        for (let i = 0; i < starsNum * 2; i++) {
            arrayOfRenderedStars.push(renderStar(i));
        }
        return arrayOfRenderedStars;
    }

    render() {
        const modificator = (this.props.index % 2 == 0) ? 'full' : 'half';
        const starId = this.props.starIndex + modificator;

        const inputType = 'checkbox';
        const inputName = this.props.info.questionId;
        const isChecked = this.props.info.isChecked;

        return (
            <div className='answers answers_type_rating'>
                {this.renderedStars.map(star => star)}
            </div>
        );
    }
}

export default RatingAnswerQuestion;