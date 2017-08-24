import React, { Component } from 'react';
import QuestionTypesOptionContainer from '../containers/questionTypesOptionContainer'

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

        return (
            <div className='question-types-board'>
                <div className='question-types-board__title'>
                    <h2>{title}</h2>
                </div>
                <ul>
                {props.types.map(type => 
                    <li>
                        <QuestionTypesOptionContainer id={type}
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