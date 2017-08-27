import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import EditPanelTitle from './editPanelTitle';
import EditPanelStat from './editPanelStat';
import BorderedButton from '../../../common/components/controls/borderedButton';
import 'react-tabs/style/react-tabs.css';
import Question from '../../common/components/question';

class EditPanel extends Component {
    constructor() {
        super();
        this.state = { tabIndex: 0 };
    }
    render() {
        return (
            <div className='edit-panel'>
                <form className='edit-panel__form'>
                    <EditPanelTitle surveyNum={0}/>
                    <EditPanelStat pagesCount={3}
                                   questionsCount={12}
                    />
                    <div className='edit-panel__manage-buttons'>
                        <BorderedButton title='Сохранить' onSaveClick={() => console.log('сохранить')} />
                        <BorderedButton title='Сохранить как шаблон' onSaveAsTemplateClick={() => console.log('сохранить как шаблон')} />
                        <BorderedButton title='Отмена' onCancelClick={() => console.log('отмена')} />
                        <BorderedButton title='Новая страница' onNewPageClick={() => console.log('сохранить')} />
                    </div>
                </form>
                <Tabs selectedIndex={this.state.tabIndex} 
                      onSelect={tabIndex => this.setState({ tabIndex })}>
                    <TabList>
                        <Tab>Title 1</Tab>
                        <Tab>Title 2</Tab>
                    </TabList>
                    <TabPanel>
                        <Question id={0}
                                  title='Вопрос'
                                  type='text'/>
                    </TabPanel>
                    <TabPanel><h2>WORLD</h2></TabPanel>
                </Tabs>
            </div>
        );
    }
}

export default EditPanel;