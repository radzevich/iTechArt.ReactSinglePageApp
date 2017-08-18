import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SideNavigation from './sideNavigation';
import '../../style/body/flex-box.css';

class FlexBox extends Component {

	render() {
		const sideNavigationItemsMeta = [
		{
			title: 'Новый опрос',
			linkTo: '/newSurvey',
		},
		{
			title: 'Мои опросы',
			linkTo: '/mySurveys',
		},
		{
			title: 'Шаблоны опросов',
			linkTo: '/surveyTemplates',
		},
		]
		return (
			<div className="flex-box">
				<Router>
					<SideNavigation navigationItemsMeta={sideNavigationItemsMeta} />
					{/*The page content will be here*/}
				</Router>
			</div>
		);
	}
}

export default FlexBox;