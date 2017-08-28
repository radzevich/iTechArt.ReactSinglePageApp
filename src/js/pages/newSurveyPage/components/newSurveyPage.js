import React from 'react';
import EditPanelContainer from '../containers/editPanelContainer';
import QuestionTypesBoard from './questionTypesBoard';
import SurveyOptionsBoard from './surveyOptionsBoard';
import questionTypesName from '../../../types/types';
import '../../../../styles/page/_content/new-survey/page_content_new-survey.css'

function NewSurveyPage() {
	return (
		<div className='page page_content_new-survey'>
			<EditPanelContainer />
			<div className='new-survey__options-boards'>
				<QuestionTypesBoardContainer actions={createQuestionActions}
											 onClick={(action) => console.log(action)}/>
				<SurveyOptionsBoard />
			</div>
		</div>
	);
}

export default NewSurveyPage;