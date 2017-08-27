import React from 'react';
import PropTypes from 'prop-types';

function EditPanelStat(props) {
    const questionsText = 'Вопросов: ';
    const answersText = 'ответов: ';
    const delimiter = ',';

    const questionsCount = props.questionsCount;
    const pagesCount = props.pagesCount;

    return (
        <div className='edit-panel__stat'>
            <span>{questionsText + questionsCount + delimiter + ' '}</span>
            <span>{answersText + pagesCount}</span>
        </div>
    );
};

EditPanelStat.propTypes  = {
    questionsCount: PropTypes.number.isRequired,
    pagesCount: PropTypes.number.isRequired,
};

EditPanelStat.defaultProps = {
    questionsCount: 0,
    pagesCount: 0,
};

export default EditPanelStat;