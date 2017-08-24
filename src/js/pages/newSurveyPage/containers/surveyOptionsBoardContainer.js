import { connect } from 'react-redux';
// import { toggleSurveyOption } from '../../actions/surveyAction';
import SurveyOptionsBoard from '../components/surveyOptionsBoard';
import {
    toggleAnonStatus,
    toggleQuestionOrder,
    toggleShowPagesNum,
    toggleShowProgreeBar,
    toggleShowQuestionNums,
    toggleShowRequiredQuestionMark,
} from '../../../actions/surveyActions';
import {
    SURVEY_OPTIONS_BOARD_TITLE,
    questionOptionsText,
} from '../../../types/types';

const mapStateToProps = state => {
    return {
        title: SURVEY_OPTIONS_BOARD_TITLE,
        options: [
            {
                text: questionOptionsText.ANON_STATUS_TEXT,
                isChecked: state.isAnon,
                onToggle: () => toggleAnonStatus,
            },
            {
                text: questionOptionsText.QUESTION_ORDER_TEXT,
                isChecked: state.showQuestionNums,
                onToggle: () =>  toggleAnonStatus,
            },
            {
                text: questionOptionsText.SHOW_PAGE_NUMS_TEXT,
                isChecked: state.showPageNums,
                onToggle: () => toggleAnonStatus,
            },
            {
                text: questionOptionsText.SHOW_PROGRESS_BAR_TEXT,
                isChecked: state.isQuestionOrderRandom,
                onToggle: () => toggleAnonStatus,
            },
            {
                text: questionOptionsText.SHOW_QUESTION_NUMS_TEXT,
                isChecked: state.showRequiredQuestionsMarks,
                onToggle: () => toggleAnonStatus,
            },
            {
                text: questionOptionsText.SHOW_REQUIRED_QUESTION_MARK_TEXT,
                isChecked: state.showProgressBar,
                onToggle: () => toggleAnonStatus,
            },
        ],
        pagesNum: state.page.length,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggle: action => dispatch(action),
    }
}

const SurveyOptionsBoardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SurveyOptionsBoard);

export default SurveyOptionsBoardContainer;
