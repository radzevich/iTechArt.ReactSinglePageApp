import React, { Component } from 'react';
import Question from '../../common/components/question';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class EditPanel extends Component {
    constructor() {
        super();
        this.state = { tabIndex: 0 };
    }
    render() {
        return (
            <div className="edit-panel">
                <Tabs selectedIndex={this.state.tabIndex} 
                    onSelect={tabIndex => this.setState({ tabIndex })}>
                    <TabList>
                        <Tab>Title 1</Tab>
                        <Tab>Title 2</Tab>
                    </TabList>
                    <TabPanel><h2>HELLO</h2></TabPanel>
                    <TabPanel><h2>WORLD</h2></TabPanel>
                </Tabs>
            </div>
        );
    }
}

export default EditPanel;