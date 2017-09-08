import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CheckboxWithLabel from '../../../common/components/controls/checkboxWithLabel';
import ControlledInput from '../../../common/components/controls/controlledInput';
import BorderedButton from '../../../common/components/controls/borderedButton';
import AnswersCreator from './answersCreator';
import {
    EDIT_QUESTION_WRAPPER__TRANSFER_TEXT,
    EDIT_QUESTION_WRAPPER__IS_REQUIRED_TEXT,
    EDIT_QUESTION_WRAPPER__SUBMIT_QUESTION_TEXT,
    EDIT_QUESTION_WRAPPER__CANCEL_TEXT,
} from '../../../types/types';

class EditQuestionWrapper extends PureComponent {
    render() {
        const questionId = this.props.id;
        const questionText = this.props.text;
        const isRequired = this.props.isRequired;
        const questionType = this.props.type;

        const onToggleRequireFlag = this.props.onToggleRequireFlag;
        const onQuestionTextChange = this.props.onQuestionTextChange;
        const onSaveButtonClick = this.props.onSaveButtonClick;
        const onCancelButtonClick = this.props.onCancelButtonClick;
        const onAnswersChange = this.props.onAnswersChange;

        return (
            <div>
                <span>{EDIT_QUESTION_WRAPPER__TRANSFER_TEXT}</span>
                <CheckboxWithLabel id={questionId}
                                   isChecked={isRequired}
                                   labelText={EDIT_QUESTION_WRAPPER__IS_REQUIRED_TEXT}
                                   onToggle={onToggleRequireFlag}
                />
                <ControlledInput value={questionText}
                                 onInputChange={onQuestionTextChange}/>
                <AnswersCreator className="form" 
                                id={questionId}
                                answers={this.props.answers}
                                type={questionType}
                                questionId={questionId}
                                onAnswersChange={onAnswersChange}
                />
                <div className='question-from_mode_edit__buttons'>
                    <BorderedButton title={EDIT_QUESTION_WRAPPER__SUBMIT_QUESTION_TEXT}
                                    onClick={onSaveButtonClick}
                    />
                    <BorderedButton title={EDIT_QUESTION_WRAPPER__CANCEL_TEXT}
                                    onClick={onCancelButtonClick}
                    />
                </div>
            </div>
        )
    }
}

EditQuestionWrapper.propTypes = {
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    questionText: PropTypes.string,
    isRequired: PropTypes.bool,
    showQuestionNums: PropTypes.bool,
    onInputChange: PropTypes.func,
}

EditQuestionWrapper.defaultProps = {
    id: 0,
    questionText: '',
    isRequired: false,
    showQuestionNums: true,
    onInputChange: () => {},
}

export default EditQuestionWrapper;