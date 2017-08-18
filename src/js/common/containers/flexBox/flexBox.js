import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SideNavigation from '../../components/sideNavigation/sideNavigation';
import '../../../../styles/flex-box/flex-box.css';

function FlexBox(props) {	
	return (
		<div className="flex-box">
			<SideNavigation navigationItemsMeta={props.navigationItemsMeta} />
			{props.navigationItemsMeta.map((navigationItem) =>
				<div className="page">
					<Route key={navigationItem.title}
						   path={navigationItem.linkTo} 
						   component={navigationItem.component}
					/>
				</div>
			)}
		</div>
	);
}

export default FlexBox;