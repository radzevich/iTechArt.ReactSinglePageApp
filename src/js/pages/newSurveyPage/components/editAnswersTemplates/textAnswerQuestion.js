import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextAnswerQuestion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value,
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const changedValueToSet = event.target.value;
        this.props.onInputChange(changedValueToSet);
        this.setState({
            value: changedValueToSet,
        });
    }

    render() {
        const inputType = 'text';
        const questionId = this.questionId;
        const valueToDisplay = this.state.value;
        return (
            <div>
                <input type={inputType} 
                       value={valueToDisplay}
                       onChange={this.handleInputChange}
                />
            </div>
        );
    }
}

TextAnswerQuestion.propTypes = {
    value: PropTypes.string,
    onInputChange: PropTypes.func,
}

TextAnswerQuestion.defaultProps = {
    value: '',
    onInputChange: () => {},
}

export default TextAnswerQuestion;