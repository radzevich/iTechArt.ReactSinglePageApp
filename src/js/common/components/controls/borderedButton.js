import React, { Component } from 'react';
import '../../../../styles/common/controls/button/button.css';
import '../../../../styles/common/controls/button/_style/button_style_bordered.css';
import PropTypes from 'prop-types';

function BorderedButton(props) {
	return (
		<div className="button button_style_bordered" onClick={() => props.onClick()}>
			<span>{props.title}</span>
		</div>
	);
}

BorderedButton.PropTypes = {
	title: PropTypes.string.isRequired,
}

export default BorderedButton