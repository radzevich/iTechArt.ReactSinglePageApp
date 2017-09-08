import React, { Component } from 'react';
import PageHeader from '../../common/components/pageHeader';
import TemplateItem from '../components/templateItem';

class SurveyTemplatesPage extends Component {
	constructor(props) {
		super(props);
		this.state = {selectedItemIndex: null};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(clickedItemIndex) {
		this.setState({selectedItemIndex: clickedItemIndex});
	}

	render() {
		const templateItems = this.props.templateItems.slice();
			
		return (			
			<div className="page page_content_survey-templates">
				<PageHeader pageTitle="Шаблоны"
							buttonText="Новый шаблон"/>
				{templateItems.map((item, index) =>
					<TemplateItem title={item.title}
								  info={item.info}	
								  isSelected={this.state.selectedItemIndex === index ? true : false}
								  onClick={() => this.handleClick(index)}
								  description={item.description}
								  key={index} />
				)}
			</div>
		);
	}
}

export default SurveyTemplatesPage