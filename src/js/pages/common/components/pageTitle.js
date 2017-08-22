import React, { Component } from 'react';

function PageTitle(props) {
	return (
		<div className="page__title">
			<h2 className="title__text">{props.text}</h2>
		</div>
	);
}

export default PageTitle;