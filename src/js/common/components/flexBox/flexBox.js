import React from 'react';
import { Route } from 'react-router-dom';
import SideNavigation from '../sideNavigation/sideNavigation';
import '../../../../styles/common/flex-box/flex-box.css';
import '../../../../styles/page/page.css';

function FlexBox(props) {	
	return (
		<div className="flex-box">
			<SideNavigation navigationItemsMeta={props.navigationItemsMeta} />
			{props.navigationItemsMeta.map((navigationItem) =>
				<Route key={navigationItem.title}
						path={navigationItem.linkTo} 
						component={navigationItem.component}
				/>
			)}
		</div>
	);
}

export default FlexBox;