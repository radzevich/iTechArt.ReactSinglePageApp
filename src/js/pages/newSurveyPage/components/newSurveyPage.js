import React, { Component } from 'react';
import EditPanelContainer from '../containers/editPanelContainer';
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
	}	

	render() {
		return (
			<div className='page page_content_new-survey'>
				<EditPanelContainer />
				<div className='new-survey__options-boards'>
					{/* <QuestionTypesBoard onClick={(action) => console.log(action)}/>
					<SurveyOptionsBoard /> */}
				</div>
			</div>
		);
}
}

export default NewSurveyPage;