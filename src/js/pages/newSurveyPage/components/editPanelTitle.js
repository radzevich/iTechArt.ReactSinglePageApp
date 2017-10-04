import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ControlledInput from '../../../common/components/controls/controlledInput';

class EditPanelTitle extends PureComponent {
    render() {
        const titleText = 'Новый опрос';
        const contentText = 'Опрос № ' + this.props.surveyNum;
        const inputValue = this.props.title;

        return (
            <div className='edit-panel__title'>
                <h2>{titleText}</h2>
                <ControlledInput value={inputValue}
                                 onInputChange={this.props.onTitleUpdate}/>
            </div>
        );
    }
}

EditPanelTitle.propTypes = {
    surveyNum: PropTypes.number,
}

EditPanelTitle.defaultProps = {
    surveyNum: 0,
    title: 'default',
}

export default EditPanelTitle;