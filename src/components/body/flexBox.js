import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class FlexBox extends Component {
	render() {
		return (
			<div className="FlexBox">
				<Router>
					<Root>
						<SideNavigation>
							<ul role="nav">
				          		<li><Link to="/newSurvey">Новый опрос</Link></li>
				          		<li><Link to="/mySurveys">Мои опросы</Link></li>
				          		<li><Link to="/surveyTemplates">Шаблоны опросов</Link></li>
				        	</ul>
						</SideNavigation>
						{/*The page content will be here*/}
					</Root>
				</Router>
			</div>
		);
	}
}