import React, { Component } from 'react';
import PropTypes from 'prop-types';

class QuestionWrapper extends Component {
    render() {
        const questionId = this.props.id;
        const questionType = this.props.type;

        return (
            <div>
                <h4>{this.props.title}</h4>
                <form className="form" 
                      id={questionId}
                      type={questionType}
                >
                    {this.props.answers}
                </form>
            </div>
        );
    }
}

export default QuestionWrapper;