import React, { Component } from 'react';
import QuestionTypesOption from '../components/controls/questionTypesOption';

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
        const types = [
            {
                type: 'SINGLE'
            }
        ]
        return (
            <div className='question-types-board'>
                <div className='question-types-board__title'>
                    <h2>{title}</h2>
                </div>
                <ul>
                {this.props.types.map(type => 
                    <li>
                        <QuestionTypesOption key={type}
                                             title={this.props.title}
                                             onClick={() => this.props.onClick(type)}
                        />
                    </li>
                )}
                </ul>
            </div>
        );
    }
}

export default QuestionTypesBoard;