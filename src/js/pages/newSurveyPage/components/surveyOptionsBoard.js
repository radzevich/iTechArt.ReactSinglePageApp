import React, { Component } from 'react';
import SurveyOptionListItem from './controls/surveyOptionsListItem';

class SurveyOptionsBoard extends Component {
    render() {
        const title = props.title;
        const options = props.options;
        return (
            <div className='survey-params-board'>
                <div className='survey-params-board__title'>
                    <h2>{title}</h2>
                </div>
                <ul>
                    {options.map((option, index) => 
                        <SurveyOption
                            name={title}
                            id={index}
                            text={props.text}
                            key={props.text}
                        />
                    )}
                </ul>
            </div>
        );
    }
}

export default SurveyOptionsBoard;