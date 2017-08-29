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
			surveyToEdit: (!!this.props.surveyToEdit)
				? Object.assign({}, this.props.surveyToEdit)
				: Object.assign({}, this.props.createNewSurvey())
		}
		this.history = initHistory();
		this.handleSaveCLick = this.handleSaveCLick.bind(this);
		this.handleSaveAsTemplateClick = this.handleSaveAsTemplateClick.bind(this);
		this.handleCancelClick = this.handleCancelClick.bind(this);
	}
	
	initHistory() {
		return [
			...[],
			this.state,
		];
	}

	handleSaveCLick() {
		this.props.onSaveChangesClick(this.state.surveyToEdit);
		this.history = initHistory();
	}

	handleSaveAsTemplateClick() {
		this.props.onSaveAsTemplateClick(this.state.surveyToEdit);
	}

	handleCancelClick() {
		const previousStateIndex = this.history.length - 1;
		const previousState = this.history[previousStateIndex];
		this.setState(previousState, () => {
			this.history = this.history.slice(0, previousStateIndex);
		})
	}

	render() {
		return (
			<div className='page page_content_new-survey'>
				<EditPanel surveyToEdit={this.state.surveyToEdit}
						   onSaveClick={() => this.handleSaveCLick()}
						   onSaveAsTemplateClick={() => this.handleSaveAsTemplateClick()}
						   onCancelClick={() => this.handleCancelClick()}
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