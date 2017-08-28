import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import FlexBox from '../common/components/flexBox/flexBox'
import NewSurveyPageContainer from '../pages/newSurveyPage/containers/newSurveyPageContainer';
import MySurveysPage from '../pages/mySurveysPage/components/mySurveysPage';
import SurveyTemplatesPage from '../pages/surveyTemplatesPage/components/surveyTemplatesPage';

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
				component: NewSurveyPageContainer,
				onClick: () => this.props.onNewSurveyClick(),
			},
			{
				title: 'Мои опросы',
				linkTo: '/mySurveys',
				component: MySurveysPage,
				onClick: () => {},
			},
			{
				title: 'Шаблоны опросов',
				linkTo: '/surveyTemplates',
				component: SurveyTemplatesPage,
				onClick: () => {},
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