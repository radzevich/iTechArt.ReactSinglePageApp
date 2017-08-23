import React, { Component } from 'react';
import NavigationItem from './navigationItem';
import PropTypes from 'prop-types';
import '../../../../styles/common/side-navigation/side-navigation.css';

function SideNavigation(props) {
	const linkTitlePairs = props.navigationItemsMeta;
	return (
		<ul className="side-navigation">
			{linkTitlePairs.map((linkTitlePair) =>
				<NavigationItem key={linkTitlePair.linkTo}
								linkTo={linkTitlePair.linkTo}
								title={linkTitlePair.title}
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