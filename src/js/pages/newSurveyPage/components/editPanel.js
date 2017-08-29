import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import EditPanelTitle from './editPanelTitle';
import EditPanelStat from './editPanelStat';
import BorderedButton from '../../../common/components/controls/borderedButton';
import 'react-tabs/style/react-tabs.css';
import Question from '../../common/components/question';

class EditPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { tabIndex: 0 };
        
    }

    handleEdit() {
        this.props.onEdit();
    }

    handleCreatePageClick() {
        this.surveyToEdit.pages 
        handleEdit()
    }

    render() {
        const surveyToEdit = this.props.surveyToEdit;
        return (
            <div className='edit-panel'>
                <form className='edit-panel__form'>
                    <EditPanelTitle surveyNum={0}/>
                    <EditPanelStat pagesCount={3}
                                   questionsCount={12}
                    />
                    <div className='edit-panel__manage-buttons'>
                        <BorderedButton onClick={() => this.props.onSaveClick()} />
                        <BorderedButton onClick={() => this.props.onSaveAsTemplateClick()} />
                        <BorderedButton onClick={() => this.props.onCancelClick()} />
                        <BorderedButton onClick={() => this.props.onCreatePageClick()} />
                    </div>
                </form>
                <Tabs selectedIndex={this.state.tabIndex} 
                      onSelect={tabIndex => this.setState({ tabIndex })}>
                    <TabList>

                        <Tab></Tab>
                    </TabList>
                    <TabPanel>
                        <Question id={0}
                                  title='Вопрос'
                                  type='text'/>
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

export default EditPanel;