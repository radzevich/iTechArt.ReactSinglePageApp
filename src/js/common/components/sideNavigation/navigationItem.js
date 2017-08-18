import React, { Component } from 'react';
import Button from '../controls/button';
import { Link } from 'react-router-dom';

function NavigationItem(props) {
	return (
		<li>
			<Link to={props.linkTo}>
				<Button title={props.title}/>
			</Link>
		</li>
	)
}

export default NavigationItem