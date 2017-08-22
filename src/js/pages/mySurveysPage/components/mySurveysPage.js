import React, { Component } from 'react';
import PageHeader from '../../common/components/pageHeader'

function MySurveysPage() {
	return (
		<div className="page page_content_my-surveys">
			<PageHeader pageTitle="Мои опросы"
						buttonText="Создать опрос"/>
		</div>
	);
}

export default MySurveysPage