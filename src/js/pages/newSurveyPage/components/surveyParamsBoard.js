import React, { Component } from 'react';

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
                    {options.map((option, index) => 
                        <li key={option.text}>
                            <input type={inputType}
                                onClick={() => null}
                                name={title}
                                id={index}
                            />
                            <label for={index}>{option.text}</label>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default SurveyParamsBoard;