import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FileAnswerQuestion extends Component {
    render() {
        const inputType = 'file';

        return (
            <div>
                <input type={inputType}/>
            </div>
        );
    }
}

export default FileAnswerQuestion;