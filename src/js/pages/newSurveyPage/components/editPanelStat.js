import React from 'react';
import PropTypes from 'prop-types';

function EditPanelStat(props) {
    const questionsText = 'Вопросов: ';
    const answersText = 'ответов: ';
    const delimiter = ',';

    const questionsCount = props.questionsCount;
    const answersCount = props.answersCount;

    return (
        <div className='edit-panel__stat'>
            <span>{questionsText + questionsCount + delimiter + ' '}</span>
            <span>{answersText + answersCount}</span>
        </div>
    );
};

EditPanelStat.propTypes  = {
    questionsCount: PropTypes.number,
    answersCount: PropTypes.number,
};

EditPanelStat.defaultProps = {
    questionsCount: 0,
    answersCount: 0,
};

export default EditPanelStat;