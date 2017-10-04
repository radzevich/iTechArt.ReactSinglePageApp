import React, { Component } from 'react';
import PageHeader from '../../common/components/pageHeader';
import TemplateItem from '../components/templateItem';
import { Get } from 'react-axios';
import axios from "axios";
import { apiRoutes } from '../../../types/types';

class SurveyTemplatesPage extends Component {
	constructor(props) {
		super(props);
		this.state = {selectedItemIndex: null};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(clickedItemIndex) {
		this.setState({selectedItemIndex: clickedItemIndex});
	}

	get AxiosInstance() {
		return axios.create({
			baseURL: apiRoutes.BASE,
			timeout: 2000,
			headers: { 'X-Custom-Header': 'foobar' }
		});
	}

	renderSurveyTemplatesPage(templateItems) {
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

	render() {
		return (
			<Get url={apiRoutes.GET_TEMPLATES}
				 instance={this.AxiosInstance}
		  	>
		  		{(error, response, isLoading) => {
				  	if (error) {
					  	return (<div>Something bad happened: {error.message}</div>)
			   		} else if(isLoading) {
				   		return (<div>Loading...</div>)
				 	} else if(response !== null) {
				   		return this.renderSurveyTemplatesPage(response.data);
				 	}	
				}}
		  	</Get>
		)
	}
}

export default SurveyTemplatesPage