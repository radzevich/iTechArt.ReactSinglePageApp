import React, { Component } from 'react';
import QuestionTypeOption from './controls/questionTypeOption'

class QuestionTypesBoard extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(clickedItemIndex) {
        // this.setState({selectedItemIndex: clickedItemIndex});
    }
    
    render() {
        const title = 'Тип вопроса';
        const options = [
            {
                title: 'Варианты ответа (один)',
                iconName: 'list-ul', 
            },
            {
                title: 'Варианты ответа (несколько)',
                iconName: 'list-ol', 
            },
            {
                title: 'Текст',
                iconName: 'font', 
            },
            {
                title: 'Файл',
                iconName: 'file', 
            },
            {
                title: 'Рейтинг в звёздах',
                iconName: 'star-o', 
            },
            {
                title: 'Шкала',
                iconName: 'battery-three-quarters ', 
            },
        ]

        return (
            <div className='question-types-board'>
                <div className='question-types-board__title'>
                    <h2>{title}</h2>
                </div>
                <ul>
                {options.map((option, index) => 
                    <li>
                        <QuestionTypeOption id={index}
                                            text={option.title}
                                            iconName={option.iconName}
                                            onClick={() => this.handleClick(index)}
                                            key={option.title}
                                            />
                    </li>
                )}
                </ul>
            </div>
        );
    }
}

export default QuestionTypesBoard;