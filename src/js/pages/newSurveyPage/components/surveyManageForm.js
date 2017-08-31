import React, { PureComponent } from 'react';
import EditPanelTitle from './editPanelTitle';
import EditPanelStat from './editPanelStat';
import BorderedButton from '../../../common/components/controls/borderedButton';

class SurveyManageForm extends PureComponent {
    render() {
        const manageButtons = this.props.manageButtons;
        return (
            <form className='edit-panel__form'>
            <EditPanelTitle surveyNum={0}/>
            <EditPanelStat pagesCount={3}
                        questionsCount={12}
            />
            <div className='edit-panel__manage-buttons'>
                {manageButtons.map(button => (
                    <BorderedButton onClick={button.onClick}
                                    title={button.text} 
                                    key={button.text}                
                    />
                ))}
            </div>
        </form>
        );
    }
}

export default SurveyManageForm;