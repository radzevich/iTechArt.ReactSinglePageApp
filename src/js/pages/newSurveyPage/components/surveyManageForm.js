import React, { PureComponent } from 'react';
import EditPanelTitle from './editPanelTitle';
import EditPanelStat from './editPanelStat';
import BorderedButton from '../../../common/components/controls/borderedButton';

class SurveyManageForm extends PureComponent {
    render() {
        const manageButtons = this.props.manageButtons;
        const surveyId = this.props.surveyId;
        const title = this.props.title;

        return (
            <form className='edit-panel__form'>
                <EditPanelTitle surveyNum={this.props.id}
                                title={title}
                                onTitleUpdate={this.props.onTitleUpdate}
                />
                <EditPanelStat questionsCount={this.props.questionsCount}
                            pagesCount={this.props.pagesCount}
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