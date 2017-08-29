import React, { Component } from 'react';
import { 
    Tab, 
    Tabs, 
    TabList, 
    TabPanel 
} from 'react-tabs';
import EditPanelTitle from './editPanelTitle';
import EditPanelStat from './editPanelStat';
import BorderedButton from '../../../common/components/controls/borderedButton';
import 'react-tabs/style/react-tabs.css';
import Question from '../../common/components/question';
import {
    DEFAULT_PAGE_TITLE
} from '../../../types/types';

class EditPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { tabIndex: 0 };
        // this.surveyToEdit = this.props.surveyToEdit;
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
        return (
            <div className='edit-panel'>
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
                <Tabs selectedIndex={this.state.tabIndex} 
                      onSelect={tabIndex => this.setState({ tabIndex })}>
                    <TabList>
                        {surveyToEdit.pages.map((page) => 
                            <Tab key={page.id}>
                                {(page.title) ? page.title : DEFAULT_PAGE_TITLE + ' ' + page.id}
                            </Tab>
                        )}
                    </TabList>
                    {surveyToEdit.pages.map((page) => 
                        <TabPanel key={page.id}>
                            {page.questions.map(question =>
                                question.id                                
                            )}
                        </TabPanel>
                    )}
                </Tabs>
            </div>
        );
    }
}

export default EditPanel;