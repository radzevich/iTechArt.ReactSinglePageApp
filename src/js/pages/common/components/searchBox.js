import React, { Component } from 'react';
import {Icon} from 'react-fa';
import '../../../../styles/common/controls/search-box/search-box.css';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {dataSource: props.itemsToSearchIn}
    }

    render() {
        return (
            <div className='search-box'>
                <Icon name='search' />
                <input className='search-box__input'
                    type='search'
                    placeholder='Search...' 
                />
            </div>
        );
    }
}

export default SearchBox;