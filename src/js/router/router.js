import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import FlexBox from '../common/components/flexBox/flexBox'

class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {activePageId: 2};
    }

    render() {       
        return (
            <BrowserRouter>
                <FlexBox />
            </BrowserRouter>
        );
    }
}

export default Router