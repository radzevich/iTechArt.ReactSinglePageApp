import React, { PureComponent } from 'react';
import { 
    Tab, 
    Tabs, 
    TabList, 
    TabPanel 
} from 'react-tabs';
import SurveyManageForm from './surveyManageForm';
import 'react-tabs/style/react-tabs.css';
import QuestionsList from './draggableQuestionList';
import ControlledInput from '../../../common/components/controls/controlledInput';
import { 
    DEFAULT_PAGE_TITLE,
    EDIT_PANEL__SAVE_BUTTON_TEXT,
    EDIT_PANEL__SAVE_AS_BUTTON_TEXT, 
    EDIT_PANEL__CANCEL_BUTTON_TEXT,
    EDIT_PANEL__NEW_PAGE_BUTTON_TEXT,
} from '../../../types/types';

class EditPanel extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
            tabIndex: 0,
        };
    }

    handlePageTitleEdit(editedTitle) {

    }

    render() {
        const manageButtons = [
            {
                text: EDIT_PANEL__SAVE_BUTTON_TEXT,
                onClick: this.props.onSaveClick,
            },
            {
                text: EDIT_PANEL__SAVE_AS_BUTTON_TEXT,
                onClick: this.props.onSaveAsTemplateClick,
            },
            {
                text: EDIT_PANEL__CANCEL_BUTTON_TEXT,
                onClick: this.props.onCancelClick,
            },
            {
                text: EDIT_PANEL__NEW_PAGE_BUTTON_TEXT,
                onClick: this.props.onCreatePageClick,
            },
        ]
        const surveyToEdit = this.props.surveyToEdit;
        const tabIndex = this.props.activePageIndex;
        const questionsToDisplay = surveyToEdit.pages[tabIndex].questions.slice();
        // debugger;

        return (
            <div className='edit-panel'>
                <SurveyManageForm manageButtons={manageButtons}
                                  id={surveyToEdit.id}
                                  title={surveyToEdit.title}
                                  pagesCount={surveyToEdit.pagesCount}
                                  questionsCount={surveyToEdit.questionsCount}
                                  onTitleUpdate={this.props.onTitleUpdate}
                                  />
                <Tabs selectedIndex={tabIndex} 
                      onSelect={tabIndex => this.props.onPageSelect(tabIndex)}
                      >                      
                    <TabList>
                        {surveyToEdit.pages.map((page, index) => 
                            <Tab key={page.id}>
                                {page.title}
                            </Tab>
                        )}
                    </TabList>
                    {surveyToEdit.pages.map((page, index) => 
                        <TabPanel key={page.id}>
                            <ControlledInput value={page.title}
                                             onInputChange={(changedTitle) => this.props.onPageTitleEdit(index, changedTitle)}/>
                            <QuestionsList questions={questionsToDisplay}
                                           onQuestionListUpdate={this.props.onQuestionListUpdate}
                                           onQuestionUpdateFixed={this.props.onQuestionUpdateFixed}
                            />
                        </TabPanel>
                    )}
                </Tabs>
            </div>
        );
    }
}

export default EditPanel;