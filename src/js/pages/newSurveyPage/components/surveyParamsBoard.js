import React, { Component } from 'react';
import SurveyOption from '../containers/surveyOption';

class SurveyParamsBoard extends Component {
    render() {
        const inputType = 'checkbox';
        const title = 'Параметры опроса';
        const options = [
            {
                text: 'Анонимный опрос',
            },
            {
                text: 'Номера вопросов',
            },
            {
                text: 'Номера страниц',
            },
            {
                text: 'Случайный порядок вопросов',
            },
            {
                text: 'Звёздочки обязательный полей',
            },
            {
                text: 'Индикатор выполнения',
            },
        ];

        return (
            <div className='survey-params-board'>
                <div className='survey-params-board__title'>
                    <h2>{title}</h2>
                </div>
                <ul>
                    {options.map(option => 
                        <SurveyOption
                            name={title}
                            id={props.id}
                            text={props.text}
                            key={props.id}
                        />
                    )}
                </ul>
            </div>
        );
    }
}

export default SurveyParamsBoard;