import React from 'react';
import EditBoard from './editBoard';
import QuestionTypesBoard from './questionTypesBoard';
import SurveyParamsBoard from './surveyParamsBoard';
import '../../../../styles/page/_content/new-survey/page_content_new-survey.css'

function NewSurveyPage() {
	return (
		<div className="page page_content_new-survey">
			<EditBoard />
			<div className="new-survey__options">
				<QuestionTypesBoard />
				<SurveyParamsBoard />
			</div>
		</div>
	);
}

export default NewSurveyPage