import React, { Component } from 'react';
import SurveyOption from '../containers/surveyOption';

class SurveyParamsBoard extends Component {
    render() {
        const TITLE = 'Параметры опроса';

        return (
            <div className='survey-params-board'>
                <div className='survey-params-board__title'>
                    <h2>{TITLE}</h2>
                </div>
                <ul>
                    {options.map(option => 
                        <SurveyOption
                            name={TITLE}
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