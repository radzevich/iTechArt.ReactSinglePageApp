import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';

class SurveyOptionsListItem extends PureComponent {

    render() {
        const inputType = 'checkbox';
        const optionState = Object.assign({}, this.props);
        return (
            <li>
                <input id={optionState.id}
                    type={inputType}
                    onChange={() => optionState.onToggle()}
                    checked={optionState.isChecked}       
                />
                <label htmlFor={optionState.id}>{optionState.text}</label>
            </li>
        );
    }
}

SurveyOptionsListItem.PropTypes = {
    onToggle: PropTypes.func.isRequired,
    name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    text: PropTypes.string.isRequired,
}

export default SurveyOptionsListItem;