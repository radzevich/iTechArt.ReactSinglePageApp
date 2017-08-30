import React, { Component } from 'react';
import EditPanel from './editPanel';
import QuestionTypesBoard from './questionTypesBoard';
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
		this.handleCancelClick = this.handleCancelClick.bind(this);
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
				...prevState.history,
				surveyToEdit,
			],
		}));
	}

	getSurveyCurrentState() {
		const currentStateIndex = this.state.history.length - 1;
		return Object.assign({}, this.state.history[currentStateIndex]);
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
				history: this.state.history.slice(0, currentStateIndex),
			})
		}
	}

	handleCreatePageClick() {
		const newPage = this.props.createNewPage();
		const currentSurveyState = this.getSurveyCurrentState();
		const nextSurveyState = Object.assign({}, currentSurveyState, {
			pages: [
				...currentSurveyState.pages,
				newPage,
			],
			pagesCount: currentSurveyState.pagesCount + 1,
		})
		this.handleCommitChanges(nextSurveyState);
	}
	
	handleSurveyOptionsToggle(surveyStateWithToggledOption) {
		const currentSurveyState = this.getSurveyCurrentState();
		const nextSurveyState = Object.assign({}, 
            currentSurveyState,
            surveyStateWithToggledOption,
		)

		this.handleCommitChanges(nextSurveyState);
	}

	handleCommitChanges(changedSurveyStateToCommit) {
		this.setState({
			history: [
				...this.state.history,
				changedSurveyStateToCommit,
			]
		});
	}

	render() {
		const surveyCurrentState =  this.getSurveyCurrentState();
		const propsForSurveyOptionsPanel = this.mapStateToSurveyOptionsPanelProps();
		return (
			<div className='page page_content_new-survey'>
				<EditPanel surveyToEdit={surveyCurrentState}
						   onSaveClick={() => this.handleSaveCLick()}
						   onSaveAsTemplateClick={() => this.handleSaveAsTemplateClick()}
						   onCancelClick={() => this.handleCancelClick()}
						   onEdit={() => this.handleCommitChanges()}
						   onCreatePageClick={() => this.handleCreatePageClick()}
				/>
				<div className='new-survey__options-boards'>
					{/* <QuestionTypesBoard onClick={}/> */}
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
}

export default NewSurveyPage;