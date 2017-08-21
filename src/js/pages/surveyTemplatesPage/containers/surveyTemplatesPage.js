import React, { Component } from 'react';
import PageHeader from '../../common/containers/pageHeader';
import TemplateItem from '../../common/components/templateItem';

class SurveyTemplatesPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		// const templateItems = this.props.templateItems.slice();
		// TEST
		const templateItems = [ 
			{
				title: "Шаблон 1",
				info: {
					questionsCount: 12,
					pagesCount: 3,
				},
			},
			{
				title: "Шаблон 2",
				info: {
					questionsCount: 15,
					pagesCount: 4,
				},
			},
			{
				title: "Шаблон 3",
				info: {
					questionsCount: 10,
					pagesCount: 2,
				},
			},
		]
		return (
			<div className="page page_content_survey-templates">
				<PageHeader pageTitle="Шаблоны"
							buttonText="Новый шаблон"/>
				{templateItems.map((item) =>
					<TemplateItem title={item.title}
								  info={item.info}	
								  key={item.title}		
					/>
				)}
			</div>
		);
	}
}

export default SurveyTemplatesPage