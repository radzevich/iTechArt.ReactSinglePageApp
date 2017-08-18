import React, { Component } from 'react';
import '../../../../styles/common/controls/button/button.css'
import '../../../../styles/common/controls/button/_style/button_style_bordered.css'

function BorderedButton(props) {
	return (
		<div className="button button_style_bordered ">
			<span>{props.title}</span>
		</div>
	);
}

export default BorderedButton