// function WrapperCreator() {
//     var templateParser = new TemplateParser();
//     var fileReader = new FileReader();

//     return {
//         create: function (question, num) {
//             var wrapperTemplate = fileReader.read('templates/wrapper.html');

//             templateParser.setTemplate(wrapperTemplate);
//             templateParser.setTemplateVariable('{NUM}', num);
//             templateParser.setTemplateVariable('{HEADER}', question.text);
//             templateParser.setTemplateVariable('{TYPE_ID}', question.typeId);

//             return templateParser.parseTemplate(true);
//         }
//     }
// }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sha1 from 'js-sha1';

class QuestionWrapper extends Component {
    render() {
        const questionTypeHash = Sha1(this.props.questionType);
        return (
            <div>
                <h4>{NUM} {HEADER}</h4>
                <form class="form" 
                      id={this.props.questionType}
                      hash={questionTypeHash}
                >
                    {this.props.answers}
                </form>
            </div>
        );
    }
}