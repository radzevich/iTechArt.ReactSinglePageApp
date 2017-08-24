import React, { Component } from 'react';
import SurveyOptionListItem from './controls/surveyOptionsListItem';

class SurveyOptionsBoard extends Component {
    render() {
        const title = this.props.title;
        const options = this.props.options;
        return (
            <div className='survey-params-board'>
                <div className='survey-params-board__title'>
                    <h2>{title}</h2>
                </div>
                <ul>
                    {options.map((option, index) => 
                        <SurveyOptionListItem
                            name={title}
                            id={index}
                            text={this.props.text}
                            key={this.props.text}
                        />
                    )}
                </ul>
            </div>
        );
    }
}

export default SurveyOptionsBoard;