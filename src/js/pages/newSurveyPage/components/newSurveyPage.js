import React, { Component } from 'react';
import EditPanel from './editPanel';
import QuestionTypesPanel from './questionTypesPanel';
import SurveyOptionsPanel from './surveyOptionsPanel';
import questionTypesName from '../../../types/types'; 
import PropTypes from 'prop-types';
import '../../../../styles/page/_content/new-survey/page_content_new-survey.css'

class NewSurveyPage extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			history: [],
		};

		this.handleSaveCLick = this.handleSaveCLick.bind(this);
		this.handlePageSelect = this.handlePageSelect.bind(this);
		this.handleCancelClick = this.handleCancelClick.bind(this);
		this.handleQuestionListUpdate = this.handleQuestionListUpdate.bind(this);
		this.handleSaveAsTemplateClick = this.handleSaveAsTemplateClick.bind(this);
		this.handleSurveyOptionsToggle = this.handleSurveyOptionsToggle.bind(this);
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
		this.props.onSaveChangesClick(this.getSurveyCurrentState());
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
	
	handleSurveyOptionsToggle(surveyStateWithToggledOption) {
		const surveyCurrentState = this.getSurveyCurrentState();
		const nextSurveyState = Object.assign({}, 
            surveyCurrentState,
            surveyStateWithToggledOption,
		);

		this.handleCommitChanges(nextSurveyState);
	}

	handleCreatePageClick() {
		const newPageToAdd = this.props.createNewPage();
		const surveyCurrentState = this.getSurveyCurrentState();
		const nextSurveyState = Object.assign({}, surveyCurrentState, {
			pages: [
				...surveyCurrentState.pages,
				newPageToAdd,
			],
			pagesCount: surveyCurrentState.pagesCount + 1,
		})
		this.handleCommitChanges(nextSurveyState);
	}

	handlePageSelect(selectedPageIndex) {
		this.setState(Object.assign({}, this.state, {
			activePageIndex: selectedPageIndex,
		}))
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

	handleQuestionListUpdate(updatedQuestionList) {
		const surveyCurrentState = this.getSurveyCurrentState();
		const indexOfPageToUpdateQuestionList = this.state.activePageIndex;
		const pageUpdatedWithQuestionList = Object.assign({}, 
			surveyCurrentState.pages[indexOfPageToUpdateQuestionList],
			{
				questions: updatedQuestionList,
			},
		);

		const numberOfQuestionsOnSourcePage = pageUpdatedWithQuestionList.questions.length;
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

	handleCommitChanges(changedSurveyStateToCommit) {
		const generalStateToCommit = {
			surveyState: changedSurveyStateToCommit,
			activePageIndex: this.state.activePageIndex,
		}

		this.setState({
			history: [
				...this.state.history,
				generalStateToCommit,
			],
		});
	}

	render() {
		const surveyCurrentState =  this.getSurveyCurrentState();
		const propsForSurveyOptionsPanel = this.mapStateToSurveyOptionsPanelProps();
		const propsForQuestionTypesPanel = this.mapStateToQuestionTypesPanelProps();
		const activePageIndex = this.state.activePageIndex;

		return (
			<div className='page page_content_new-survey'>
				<EditPanel surveyToEdit={surveyCurrentState}
						   activePageIndex={activePageIndex}
						   onSaveClick={() => this.handleSaveCLick()}
						   onSaveAsTemplateClick={() => this.handleSaveAsTemplateClick()}
						   onCancelClick={() => this.handleCancelClick()}
						   onEdit={() => this.handleCommitChanges()}
						   onCreatePageClick={() => this.handleCreatePageClick()}
						   onPageSelect={(selectedPageIndex) => this.handlePageSelect(selectedPageIndex)}
						   onQuestionListUpdate={(updatedQuestionList) => this.handleQuestionListUpdate(updatedQuestionList)}
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