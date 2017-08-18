import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SideNavigation from '../../components/sideNavigation/sideNavigation';
import NewSurveyPage from '../../../pages/newSurveyPage/containers/newSurveyPage';
import MySurveysPage from '../../../pages/mySurveysPage/containers/mySurveysPage';
import SurveyTemplatesPage from '../../../pages/surveyTemplatesPage/containers/surveyTemplatesPage';
import '../../../../styles/flex-box/flex-box.css';

class FlexBox extends Component {

	render() {
		const sideNavigationItemsMeta = [
			{
				title: 'Новый опрос',
				linkTo: '/newSurvey',
				component: {NewSurveyPage},
			},
			{
				title: 'Мои опросы',
				linkTo: '/mySurveys',
				component: {MySurveysPage},
			},
			{
				title: 'Шаблоны опросов',
				linkTo: '/surveyTemplates',
				component: {SurveyTemplatesPage},
			},
		];
		return (
			<div className="flex-box">
				<Router>
					<SideNavigation navigationItemsMeta={sideNavigationItemsMeta} />
					{/*{sideNavigationItemsMeta.map((navigationItem) =>
											{<Route path={navigationItem.linkTo} 
												   component={navigationItem.component}
											/>
										)}*/}
				</Router>
			</div>
		);
	}
}

export default FlexBox;