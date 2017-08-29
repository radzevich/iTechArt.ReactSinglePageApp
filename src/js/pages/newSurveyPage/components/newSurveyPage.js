import React, { Component } from 'react';
import EditPanel from './editPanel';
import QuestionTypesBoard from './questionTypesBoard';
import SurveyOptionsBoard from './surveyOptionsBoard';
import questionTypesName from '../../../types/types'; 
import '../../../../styles/page/_content/new-survey/page_content_new-survey.css'

class NewSurveyPage extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			history: [],
		};

		this.handleSaveCLick = this.handleSaveCLick.bind(this);
		this.handleSaveAsTemplateClick = this.handleSaveAsTemplateClick.bind(this);
		this.handleCancelClick = this.handleCancelClick.bind(this);
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

	handleSaveCLick() {
		this.props.onSaveChangesClick(this.getSurveyCurrentState());
	}

	handleSaveAsTemplateClick() {
		this.props.onSaveAsTemplateClick(this.getSurveyCurrentState());
	}

	handleCancelClick() {
		if (this.state.history.length > 1) {
			const previousStateIndex = this.state.history.length - 1;
			const previousState = this.state.history[previousStateIndex];

			this.setState(Object.assign({}, this.state, {
				history: [
					...this.state.history,
					previousState,
				]
			}))
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
					{/* <QuestionTypesBoard onClick={(action) => console.log(action)}/>
					<SurveyOptionsBoard /> */}
				</div>
			</div>
		);
	}
}

export default NewSurveyPage;