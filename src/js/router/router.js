import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import FlexBox from '../common/containers/flexBox/flexBox'
import NewSurveyPage from '../pages/newSurveyPage/containers/newSurveyPage';
import MySurveysPage from '../pages/mySurveysPage/containers/mySurveysPage';
import SurveyTemplatesPage from '../pages/surveyTemplatesPage/containers/surveyTemplatesPage';

class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {activePageId: 2};
    }

    render() {
        const navigationItemsMeta = [
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
            <BrowserRouter>
                <FlexBox navigationItemsMeta={navigationItemsMeta}/>
            </BrowserRouter>
        );
    }
}

export default Router