import React, { PureComponent } from 'react';
import { 
    Tab, 
    Tabs, 
    TabList, 
    TabPanel 
} from 'react-tabs';
import SurveyManageForm from './surveyManageForm';
import 'react-tabs/style/react-tabs.css';
import QuestionsList from './draggableQuestionList'
import { 
    DEFAULT_PAGE_TITLE,
} from '../../../types/types';

class EditPanel extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
            tabIndex: 0,
        };
    }

    render() {
        const manageButtons = [
            {
                text: 'Сохранить',
                onClick: this.props.onSaveClick,
            },
            {
                text: 'Сохранить как шаблон',
                onClick: this.props.onSaveAsTemplateClick,
            },
            {
                text: 'Отмена',
                onClick: this.props.onCancelClick,
            },
            {
                text: 'Новая страница',
                onClick: this.props.onCreatePageClick,
            },
        ]
        const surveyToEdit = this.props.surveyToEdit;
        const tabIndex = this.props.activePageIndex;
        const questionsToDisplay = surveyToEdit.pages[tabIndex].questions.slice();

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
                        {surveyToEdit.pages.map((page) => 
                            <Tab key={page.id}>
                                {(page.title) ? page.title : DEFAULT_PAGE_TITLE + ' ' + page.id}
                            </Tab>
                        )}
                    </TabList>
                    {surveyToEdit.pages.map((page) => 
                        <TabPanel key={page.id}>
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