import React, { Component } from 'react';
import NavigationItem from './navigationItem';
import PropTypes from 'prop-types';
import '../../../../styles/common/side-navigation/side-navigation.css';

function SideNavigation(props) {
	const navigationItemsMeta = props.navigationItemsMeta;
	return (
		<ul className="side-navigation">
			{navigationItemsMeta.map((navigationItem) =>
				<NavigationItem key={navigationItem.linkTo}
								linkTo={navigationItem.linkTo}
								title={navigationItem.title}
				/>
			)}
		</ul>
	);
}


SideNavigation.PropTypes = {
	navigationItemsMeta: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string.isRequired,
		linkTo: PropTypes.string.isRequired,
	})),
}

export default SideNavigation