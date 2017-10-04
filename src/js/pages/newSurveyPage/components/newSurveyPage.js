import React, { Component } from 'react';
import EditPanel from './editPanel';
import QuestionTypesPanel from './questionTypesPanel';
import SurveyOptionsPanel from './surveyOptionsPanel';
import {
	questionTypesName, 
	NEW_SURVEY_PAGE__QUESTIONS_WERE_UPDATED_MESSAGE,
	QUESTION_CREATOR__QUESTION_WAS_UPDATED,
	QUESTION_CREATOR__QUESTION_WAS_COMMITED,
} from '../../../types/types'; 
import PropTypes from 'prop-types';
import '../../../../styles/page/_content/new-survey/page_content_new-survey.css'

class NewSurveyPage extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			history: [],
		};

		this.questionsUpdatesCount = 0;

		this.handleSaveCLick = this.handleSaveCLick.bind(this);
		this.handlePageSelect = this.handlePageSelect.bind(this);
		this.handleCancelClick = this.handleCancelClick.bind(this);
		this.handlePageTitleEdit = this.handlePageTitleEdit.bind(this);
		this.handleQuestionListUpdate = this.handleQuestionListUpdate.bind(this);
		this.handleSaveAsTemplateClick = this.handleSaveAsTemplateClick.bind(this);
		this.handleSurveyOptionsToggle = this.handleSurveyOptionsToggle.bind(this);
		this.handleQuestionUpdatesFixed = this.handleQuestionUpdatesFixed.bind(this);
		this.handleCommitChanges = this.handleCommitChanges.bind(this);
	}

	componentWillMount() {
		const surveyToEdit = (!!this.props.surveyToEdit)
			? Object.assign({}, this.props.surveyToEdit)
			: Object.assign({}, this.props.createNewSurvey());
		
		this.setState(prevState => ({
			history: [
				...prevState.history, {
					surveyState: surveyToEdit,
					activePageIndex: 0,
				}
			],
			activePageIndex: 0,
		}));
	}

	get questionsWereUpdated() {
		return this.questionsUpdatesCount !== 0;
	}

	getCurrentState() {
		const currentStateIndex = this.state.history.length - 1;
		return Object.assign({}, this.state.history[currentStateIndex]);
	}

	getSurveyCurrentState() {
		const currentGeneralState = this.getCurrentState();
		return currentGeneralState.surveyState;
	}

	mapStateToSurveyOptionsPanelProps() {
		const currentState = this.getSurveyCurrentState();
		return {
			isAnon: currentState.isAnon,
			showQuestionNums: currentState.showQuestionNums,
			showPageNums: currentState.showPageNums,
			isQuestionOrderRandom: currentState.isQuestionOrderRandom,
			showRequiredQuestionsMarks: currentState.showRequiredQuestionsMarks,
			showProgressBar: currentState.showProgressBar,
		};
	}

	mapStateToQuestionTypesPanelProps() {
		const currentState = this.getSurveyCurrentState();
		return {
			pages: Object.assign({}, currentState.pages),
			pagesCount: currentState.pagesCount,
			questionsCount: currentState.questionsCount,
		}
	}

	handleSaveCLick() {
		var surveyCurrentState = this.getSurveyCurrentState();
		if (surveyCurrentState.id) {
			this.props.updateExistingSurey(surveyCurrentState);
		} else {
			this.props.saveNewSurvey(surveyCurrentState);
		}
	}

	handleSaveAsTemplateClick() {
		this.props.onSaveAsTemplateClick(this.getSurveyCurrentState());
	}

	handleCancelClick() {
		if (this.state.history.length > 1) {
			const currentStateIndex = this.state.history.length - 1;
			this.setState({
				activePageIndex: this.state.history[currentStateIndex].activePageIndex,
				history: this.state.history.slice(0, currentStateIndex),
			})
		}
	}

	handleTitleUpdate(updatedTitle) {
		const surveyCurrentState = this.getSurveyCurrentState();
		const nextSurveyState = Object.assign({}, surveyCurrentState, {
			title: updatedTitle,
		});
		this.handleCommitChanges(nextSurveyState);
	}
	
	handleSurveyOptionsToggle(surveyStateWithToggledOption) {
		const surveyCurrentState = this.getSurveyCurrentState();
		const nextSurveyState = Object.assign({}, 
            surveyCurrentState,
            surveyStateWithToggledOption,
		);
		this.handleCommitChanges(nextSurveyState);
	}

	shouldPagesUpdate() {
		if (this.questionsWereUpdated) {
			if (window.confirm(NEW_SURVEY_PAGE__QUESTIONS_WERE_UPDATED_MESSAGE) == false) {
                return false;
            }
		}
		return true;
	}

	handleCreatePageClick() {
		if (!this.shouldPagesUpdate()) {
			return;
		}
		const newPageToAdd = this.props.createNewPage();
		const surveyCurrentState = this.getSurveyCurrentState();
		const nextSurveyState = Object.assign({}, surveyCurrentState, {
			pages: [
				...surveyCurrentState.pages,
				newPageToAdd,
			],
			pagesCount: surveyCurrentState.pagesCount + 1,
		}) 
		this.handleCommitChanges(
			nextSurveyState,
			this.handlePageSelect(nextSurveyState.pagesCount - 1, true),
		);
	}

	handlePageSelect(selectedPageIndex, questionChangesWereChecked) {
		if (!questionChangesWereChecked) {
			if (!this.shouldPagesUpdate()) {
				return;
			}
		}
		this.questionsUpdatesCount = 0;
		this.setState(Object.assign({}, this.state, {
			activePageIndex: selectedPageIndex,
		}));
	}

	handleQuestionUpdatesFixed(actionToProcess) {
        if (actionToProcess === QUESTION_CREATOR__QUESTION_WAS_UPDATED) {
            this.questionsUpdatesCount++;
        } else if (actionToProcess === QUESTION_CREATOR__QUESTION_WAS_COMMITED) {
            this.questionsUpdatesCount--;
		}
    }

	handleQuestionTypeClick(clickedType) {
		const surveyCurrentState = this.getSurveyCurrentState();
		const newQuestionToAdd = this.props.createNewQuestion(clickedType);
		const indexOfPageToAddQuestion = this.state.activePageIndex;

		const sourceListOfQuestions = surveyCurrentState.pages[indexOfPageToAddQuestion].questions.slice();
		const updatedListOfQuestions = [
			...sourceListOfQuestions,
			newQuestionToAdd,
		]

		this.handleQuestionListUpdate(updatedListOfQuestions);
	}

	handlePageTitleEdit(pageIndex, changedPageTitleToSet) {
		// debugger;
		const surveyCurrentState = this.getSurveyCurrentState();
		const updatedPage = Object.assign({}, surveyCurrentState.pages[pageIndex], {
			title: changedPageTitleToSet,
		})
		const updatedPageList = [
			...surveyCurrentState.pages.slice(0, pageIndex),
			updatedPage,
			...surveyCurrentState.pages.slice(pageIndex + 1, surveyCurrentState.pages.length),
		]
		const nextSurveyState = Object.assign({}, surveyCurrentState, {
			pages: updatedPageList,
		})
		this.handleCommitChanges(nextSurveyState);
	}

	handleQuestionListUpdate(updatedQuestionList) {
		const surveyCurrentState = this.getSurveyCurrentState();
		const indexOfPageToUpdateQuestionList = this.state.activePageIndex;
		const numberOfQuestionsOnSourcePage = surveyCurrentState.pages[indexOfPageToUpdateQuestionList].questions.length;
		
		const pageUpdatedWithQuestionList = Object.assign({}, 
			surveyCurrentState.pages[indexOfPageToUpdateQuestionList],
			{
				questions: updatedQuestionList,
			},
		);

		const numberOfQuestionsOnUpdatedPage = updatedQuestionList.length;
		const questionsWereAddedCount = numberOfQuestionsOnUpdatedPage - numberOfQuestionsOnSourcePage;

		const nextSurveyState = Object.assign({}, surveyCurrentState, {
			pages: [
				...surveyCurrentState.pages.slice(0, indexOfPageToUpdateQuestionList),
				pageUpdatedWithQuestionList,
				...surveyCurrentState.pages.slice(indexOfPageToUpdateQuestionList + 1, surveyCurrentState.pages.length),
			],
			questionsCount: surveyCurrentState.questionsCount + questionsWereAddedCount,
		});

		this.handleCommitChanges(nextSurveyState);
	}

	handleCommitChanges(changedSurveyStateToCommit, callback = () => {}) {
		const generalStateToCommit = {
			surveyState: changedSurveyStateToCommit,
			activePageIndex: this.state.activePageIndex,
		}

		this.setState({
			history: [
				...this.state.history,
				generalStateToCommit,
			],
		}, callback());
	}

	render() {
		const surveyCurrentState =  this.getSurveyCurrentState();
		const propsForSurveyOptionsPanel = this.mapStateToSurveyOptionsPanelProps();
		const propsForQuestionTypesPanel = this.mapStateToQuestionTypesPanelProps();
		const activePageIndex = this.state.activePageIndex;
		
		console.log(this.state);

		return (
			<div className='page page_content_new-survey'>
				<EditPanel surveyToEdit={surveyCurrentState}
						   activePageIndex={activePageIndex}
						   onSaveClick={() => this.handleSaveCLick()}
						   onSaveAsTemplateClick={() => this.handleSaveAsTemplateClick()}
						   onCancelClick={() => this.handleCancelClick()}
						   onEdit={() => this.handleCommitChanges()}
						   onCreatePageClick={() => this.handleCreatePageClick()}
						   onPageTitleEdit={(pageIndex, titleToSet) => this.handlePageTitleEdit(pageIndex, titleToSet)}
						   onPageSelect={(selectedPageIndex) => this.handlePageSelect(selectedPageIndex)}
						   onQuestionListUpdate={updatedQuestionList => this.handleQuestionListUpdate(updatedQuestionList)}
						   onTitleUpdate={updatedTitle => this.handleTitleUpdate(updatedTitle)}
						   onQuestionUpdateFixed={actionToProcess => this.handleQuestionUpdatesFixed(actionToProcess)}
				/>
				<div className='new-survey__options-boards'>
					<QuestionTypesPanel currentState={this.state}
										onClick={clickedType => this.handleQuestionTypeClick(clickedType)}/>
					<SurveyOptionsPanel currentState={propsForSurveyOptionsPanel}
										onOptionToggle={state => this.handleSurveyOptionsToggle(state)}
					/>
				</div>
			</div>
		);
	}
}

NewSurveyPage.propTypes = {
	onSaveAsClick: PropTypes.func.isRequired,
	onSaveChangesClick: PropTypes.func.isRequired,
	createNewSurvey: PropTypes.func.isRequired,
	createNewPage: PropTypes.func.isRequired,
	createNewQuestion: PropTypes.func.isRequired,
}

export default NewSurveyPage;