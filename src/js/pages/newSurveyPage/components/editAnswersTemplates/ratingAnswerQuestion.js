import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-fa';

class RatingAnswerQuestion extends Component {
    renderStar(starIndex) {
        const modificator = (starIndex % 2 == 0);
        const inputType = 'checkbox';
        const inputName = this.props.name;
        const checkedStarIndex = this.props.value;

        const starIcon = (modificator) 
            ? <Icon className='rating-label half' name='star-half-o'/>
            : <Icon className='rating-label full' name='star'/>

        return (
            <div>
                <input class="rating-input" 
                    type="radio" 
                    id={starIndex} 
                    isChecked={(checkedStarIndex <= starIndex) ? true : false}
                    name={inputName}
                /> 
                {starIcon} 
            </div> 
        )
    }

    get renderedStars() {
        const starsNum = 5;
        const arrayOfRenderedStars = [];

        for (let i = 0; i < starsNum * 2; i++) {
            arrayOfRenderedStars.push(this.renderStar(i));
        }
        return arrayOfRenderedStars;
    }

    render() {
        return (
            <div className='answers answers_type_rating'>
                {this.renderedStars.map(star => star)}
            </div>
        );
    }
}

export default RatingAnswerQuestion;