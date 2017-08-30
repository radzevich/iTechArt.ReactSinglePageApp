import React, { Component } from 'react';
import QuestionTypesOption from '../components/controls/questionTypesOption';
import PropTypes from 'prop-types';
import { 
    questionTypesName,
    questionTypeInfoToRender,
    QUESTION_TYPES_PANEL_TITLE,
 } from '../../../types/types';

class QuestionTypesPanel extends Component {
    renderQuestionTypeOption(type) {
        const questionTypeInfo = questionTypeInfoToRender(type);
        const title = questionTypeInfo.title;
        const iconName = questionTypeInfo.iconName;
        return (
            <QuestionTypesOption iconName={iconName}
                                 title={title}
                                 onClick={() => this.props.onClick(type)}
            />
        );
    }
    
    render() {
        const title = QUESTION_TYPES_PANEL_TITLE;
        const questionTypes = Object.values(questionTypesName);
        return (
            <div className='question-types-board'>
                <div className='question-types-board__title'>
                    <h2>{title}</h2>
                </div>
                <ul>
                {questionTypes.map(type => 
                    <li key={type}>
                        {this.renderQuestionTypeOption(type)}
                    </li>
                )}
                </ul>
            </div>
        );
    }
}

QuestionTypesPanel.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default QuestionTypesPanel;