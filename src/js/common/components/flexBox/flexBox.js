import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SideNavigation from '../sideNavigation/sideNavigation';
import '../../../../styles/common/flex-box/flex-box.css';
import '../../../../styles/page/page.css';
import PropTypes from 'prop-types';

class FlexBox extends Component {	
	
	render() {
		const navigationItemsMeta = this.props.navigationItemsMeta;
		return (
			<div className="flex-box">
				<SideNavigation navigationItemsMeta={navigationItemsMeta} />
				{navigationItemsMeta.map((navigationItem) =>
					<Route key={navigationItem.title}
						   path={navigationItem.linkTo} 
						   component={navigationItem.component}
					/>
				)}
			</div>
		);
	}
}

FlexBox.PropTypes = {
	navigationItemsMeta: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string.isRequired,
		linkTo: PropTypes.string.isRequired,
		component: PropTypes.element,
	})),
}

export default FlexBox;