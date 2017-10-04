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

SurveyOptionsListItem.propTypes = {
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    onToggle: PropTypes.func.isRequired,
    text: PropTypes.string,
    isChecked: PropTypes.bool,
}

SurveyOptionsListItem.defaultProps = {
    text: 'UNDEFINED_PROPERTY',
    isChecked: false,
}

export default SurveyOptionsListItem;