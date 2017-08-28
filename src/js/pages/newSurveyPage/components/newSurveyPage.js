import React from 'react';
import EditPanel from './editPanel';
import QuestionTypesBoard from './questionTypesBoard';
import SurveyOptionsBoard from './surveyOptionsBoard';
import questionTypesName from '../../../types/types';
import '../../../../styles/page/_content/new-survey/page_content_new-survey.css'

function NewSurveyPage() {
	const createQuestionActions = [
		'CREATE_SINGLE_QUESTION',
		'CREATE_MULTI_QUESTION',
		'CREATE_TEXT_QUESTION',
		'CREATE_FILE_QUESTION',
		'CREATE_RATING_QUESTION',
		'CREATE_RANGE_QUESTION',
	]
	return (
		<div className='page page_content_new-survey'>
			<EditPanel />
			<div className='new-survey__options-boards'>
				<QuestionTypesBoard actions={createQuestionActions}
									onClick={(action) => console.log(action)}/>
				<SurveyOptionsBoard />
			</div>
		</div>
	);
}

export default NewSurveyPage;