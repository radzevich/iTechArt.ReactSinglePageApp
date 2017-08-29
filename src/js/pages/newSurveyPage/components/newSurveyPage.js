import React, { Component } from 'react';
import EditPanel from './editPanel';
import QuestionTypesBoard from './questionTypesBoard';
import SurveyOptionsBoard from './surveyOptionsBoard';
import questionTypesName from '../../../types/types';
import '../../../../styles/page/_content/new-survey/page_content_new-survey.css'

class NewSurveyPage extends Component {
	constructor(props) {
		super(props);
		const surveyToEdit = (!!this.props.surveyToEdit)
			? Object.assign({}, this.props.surveyToEdit)
			: Object.assign({}, this.props.createNewSurvey());
		this.state = {
			history: [
				surveyToEdit
			],
		};
		this.handleSaveCLick = this.handleSaveCLick.bind(this);
		this.handleSaveAsTemplateClick = this.handleSaveAsTemplateClick.bind(this);
		this.handleCancelClick = this.handleCancelClick.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
	}

	getSurveyCurrentState() {
		const currentStateIndex = this.state.history.length;
		return Object.assign({}, this.state.history[currentStateIndex]);
	}

	handleSaveCLick() {
		this.props.onSaveChangesClick(this.getSurveyCurrentState());
	}

	handleSaveAsTemplateClick() {
		this.props.onSaveAsTemplateClick(this.getSurveyCurrentState());
	}

	handleCancelClick() {
		const currentStateIndex = this.state.history.length - 1;
		if (this.state.history.length > 1) {
			this.setState(Object.assign({}, this.state, {
				history: this.history.slice(0, currentStateIndex),
			}))
		}
	}

	handleEdit(changedSurvey) {
		const surveyCurrentState = this.getSurveyCurrentState();
		const surveyNextState = Object.assign({}, 
			surveyCurrentState,
			changedSurvey,
		)
		this.setState(Object.assign({}, this.state, {
			history: [
				...this.state.history,
				surveyNextState,
			]
		}));
	}

	render() {
		const currentSurveyToEditState = this.getSurveyCurrentState();
		return (
			<div className='page page_content_new-survey'>
				<EditPanel surveyToEdit={currentSurveyToEditState}
						   onSaveClick={() => this.handleSaveCLick()}
						   onSaveAsTemplateClick={() => this.handleSaveAsTemplateClick()}
						   onCancelClick={() => this.handleCancelClick()}
						   onEdit={() => this.handleEdit()}
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