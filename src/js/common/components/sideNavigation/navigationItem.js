import React, { Component } from 'react';
import BorderedButton from '../controls/borderedButton';
import { Link } from 'react-router-dom';

function NavigationItem(props) {
	return (
		<li>
			<Link to={props.linkTo}>
				<BorderedButton title={props.title}/>
			</Link>
		</li>
	)
}

export default NavigationItem