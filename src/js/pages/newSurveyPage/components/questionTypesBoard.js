import React, { Component } from 'react';
import QuestionTypesOption from '../components/controls/questionTypesOption';
import { 
    questionTypesName,
    questionTypesTitle,
 } from '../../../types/types';

class QuestionTypesBoard extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(clickedItemIndex) {
        // this.setState({selectedItemIndex: clickedItemIndex});
    }

    renderQuestionTypeOption(type) {
        const title = questionTypesTitle[type].title;
        const iconName = questionTypesTitle[type].iconName;
        return (
            <QuestionTypesOption key={type}
                iconName={iconName}
                title={title}
                onClick={() => this.props.onClick(type)}
            />
        );
    }
    
    render() {
        const title = 'Тип вопроса';
        const questionTypes = Object.values(questionTypesName);
        return (
            <div className='question-types-board'>
                <div className='question-types-board__title'>
                    <h2>{title}</h2>
                </div>
                <ul>
                {questionTypes.map(type => 
                    <li>
                        {renderQuestionTypeOption(type)}
                    </li>
                )}
                </ul>
            </div>
        );
    }
}

export default QuestionTypesBoard;