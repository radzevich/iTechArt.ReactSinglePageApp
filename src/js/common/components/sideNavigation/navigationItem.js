import React, { Component } from 'react';
import BorderedButton from '../controls/borderedButton';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavigationItem(props) {
	return (
		<li>
			<Link to={props.linkTo}>
				<BorderedButton title={props.title}/>
			</Link>
		</li>
	)
}

NavigationItem.PropTypes = {
	title: PropTypes.string.isRequired,
	linkTo: PropTypes.string.isRequired,
}

export default NavigationItem