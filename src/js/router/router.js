import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import FlexBox from '../common/components/flexBox/flexBox';
import NewSurveyPageContainer from '../pages/newSurveyPage/containers/newSurveyPageContainer';
import MySurveysPage from '../pages/mySurveysPage/components/mySurveysPage';
import SurveyTemplatesPage from '../pages/surveyTemplatesPage/components/surveyTemplatesPage';
import { Get, Post, Put, Patch, withAxios } from 'react-axios';
import axios from "axios";
import { apiRoutes } from '../types/types';

class Router extends Component {
    render() {   
		const axiosInstance = axios.create({
			baseURL: apiRoutes.BASE,
			timeout: 2000,
			headers: { 'X-Custom-Header': 'foobar' }
		  });

		const navigationItemsMeta = [
			{
				title: 'Новый опрос',
				linkTo: '/newSurvey',
				component: NewSurveyPageContainer,
			},
			{
				title: 'Мои опросы',
				linkTo: '/mySurveys',
				component: MySurveysPage,
			},
			{
				title: 'Шаблоны опросов',
				linkTo: '/surveyTemplates',
				component: SurveyTemplatesPage,
			},
		];  
		// debugger;  
        return (
            <BrowserRouter>
                <FlexBox navigationItemsMeta={navigationItemsMeta} />
            </BrowserRouter>
        );
    }
}

export default Router;