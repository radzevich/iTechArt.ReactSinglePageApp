import React, { PureComponent } from 'react';
import SurveyOptionListItem from './controls/surveyOptionsListItem';
import { 
    questionOptionsText,
    SURVEY_OPTIONS_PANEL_TITLE,
} from '../../../types/types';
import PropTypes from 'prop-types';

class SurveyOptionsPanel extends PureComponent {
    constructor(props) {
        super(props);
        this.handleOptionToggle = this.handleOptionToggle.bind(this);
    }

    handleOptionToggle(toggledOptionName) {
        const changedState = Object.assign({}, this.props.currentState);
        const newOptionValue = !this.props.currentState[toggledOptionName];

        changedState[toggledOptionName] = newOptionValue;

        this.props.onOptionToggle(changedState);
    }

    getSurveyOptionItemInfo() {
        const currentState = this.props.currentState;
        return [
            {
                text: questionOptionsText.ANON_STATUS_TEXT,
                isChecked: currentState.isAnon,
                propName: 'isAnon',
            },
            {
                text: questionOptionsText.QUESTION_ORDER_TEXT,
                isChecked: currentState.isQuestionOrderRandom,
                propName: 'isQuestionOrderRandom',
            },
            {
                text: questionOptionsText.SHOW_PAGE_NUMS_TEXT,
                isChecked: currentState.showPageNums,
                propName: 'showPageNums',
            },
            {
                text: questionOptionsText.SHOW_PROGRESS_BAR_TEXT,
                isChecked: currentState.showProgressBar,
                propName: 'showProgressBar',
            },
            {
                text: questionOptionsText.SHOW_QUESTION_NUMS_TEXT,
                isChecked: currentState.showQuestionNums,
                propName: 'showQuestionNums',
            },
            {
                text: questionOptionsText.SHOW_REQUIRED_QUESTION_MARK_TEXT,
                isChecked:currentState.showRequiredQuestionsMarks,
                propName: 'showRequiredQuestionsMarks',
            },
        ]
    };

    render() {
        const title = SURVEY_OPTIONS_PANEL_TITLE;
        const options = this.getSurveyOptionItemInfo();
        return (
            <div className='survey-params-board'>
                <div className='survey-params-board__title'>
                    <h2>{title}</h2>
                </div>
                <ul>
                    {options.map((option, index) =>
                        <SurveyOptionListItem id={index}
                                              text={option.text}
                                              isChecked={option.isChecked}
                                              onToggle={() => this.handleOptionToggle(option.propName)}
                                              key={option.propName}
                        />
                    )}
                </ul>
            </div>
        );
    }
}

SurveyOptionsPanel.propTypes = {
    currentState: PropTypes.shape({
        isAnon: PropTypes.bool.isRequired,
        showQuestionNums: PropTypes.bool.isRequired,
        showPageNums: PropTypes.bool.isRequired,
        isQuestionOrderRandom: PropTypes.bool.isRequired,
        showRequiredQuestionsMarks: PropTypes.bool.isRequired,
        showProgressBar: PropTypes.bool.isRequired,
    }).isRequired,
    onOptionToggle: PropTypes.func.isRequired,
}

export default SurveyOptionsPanel;