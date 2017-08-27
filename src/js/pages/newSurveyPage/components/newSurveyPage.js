import React from 'react';
import EditPanel from './editPanel';
import QuestionTypesBoardContainer from '../containers/questionTypesBoardContainer';
import SurveyOptionsBoardContainer from '../containers/surveyOptionsBoardContainer';
import '../../../../styles/page/_content/new-survey/page_content_new-survey.css'

function NewSurveyPage() {
	return (
		<div className='page page_content_new-survey'>
			<EditPanel />
			<div className='new-survey__options-boards'>
				{/* <QuestionTypesBoardContainer />
				<SurveyOptionsBoardContainer /> */}
			</div>
		</div>
	);
}

export default NewSurveyPage;