import React, { Component } from 'react';
import NavigationItem from './navigationItem';
import '../../../../styles/flex-box/side-navigation/side-navigation.css';

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

export default SideNavigation