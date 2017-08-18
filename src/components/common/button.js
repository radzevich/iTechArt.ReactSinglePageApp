import React, { Component } from 'react';
import '../../style/common/button/button.css'
import '../../style/common/button/_style/button_style_bordered.css'

function Button(props) {
	return (
		<div className="button button_style_bordered ">
			<span>{props.title}</span>
		</div>
	);
}

export default Button