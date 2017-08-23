// function createRangeQuestion() {
//     var fileReader = new FileReader();
//     var templateParser = new TemplateParser();

//     function createAnswers(template, question) {
//         templateParser.setTemplate(template);
//         templateParser.setTemplateVariable('{NAME}', question.id);
//         templateParser.setTemplateVariable('{ID}', 0);
//         templateParser.setTemplateVariable('{VALUE}', question.answers[0]);
//         templateParser.setTemplateVariable('{MIN}', question.answers[1]);
//         templateParser.setTemplateVariable('{MAX}', question.answers[2]);

//         return templateParser.parseTemplate(true);
//     }

//     return {
//         create: function (question) {
//             var fileAnswerTemplate = fileReader.read('templates/rangeAnswerTemplate.html');

//             return createAnswers(fileAnswerTemplate, question);
//         }
//     }
// }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sha1 from 'js-sha1';

class FileAnswerQuestion extends Component {
    render() {
        const inputType = 'file';
        const inputName = this.props.info.questionId;
        const inputValue = this.props.info.value;
        const inputMin = this.props.info.min;
        const inputMax = this.props.info.max;
        const answerHash = Sha1(inputType + inputName + inputMin + inputMax);
        return (
            <div>
                <input type={inputType}
                       name={inputName}
                       hash={answerHash}
                />
            </div>
        );
    }
}

SingleAnswerQuestion.PropTypes = {
    info: PropTypes.shape({
        questionId: PropTypes.number.isRequired,
        isChecked: PropTypes.bool,
    })
}

export default FileAnswerQuestion;