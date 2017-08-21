import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import '../../../../styles/common/controls/search-box/search-box.css';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {dataSource: props.itemsToSearchIn}
    }

    render() {
        return (
            <div className='search-box'>
                <FontAwesome
                    className='fa fa-search'
                    name='rocket'
                />
                <input className='search-box__input'
                    type='search'
                    placeholder='Search...' 
                />
            </div>
        );
    }
}

export default SearchBox;