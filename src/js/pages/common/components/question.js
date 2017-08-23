import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Question extends Component {
    render() {
        const answers = questionType => {
            switch(questionType) {
                case 'single':
                    return null;
                case 'multy':
                    return null;
                case 'text':
                    return null;
                case 'file':
                    return null;
                case 'starRating':
                    return null;
                case 'scale':
                    return null;
            }
        }
        return (
            
        );
    }
}

Question.PropTypes = {
    questionType: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
}

export default Question

