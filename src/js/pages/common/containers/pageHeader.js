import React, { Component } from 'react';
import PageTitle from '../components/pageTitle';
import SearchBox from '../components/searchBox';
import BorderedButton from '../../../common/components/controls/borderedButton';
import '../../../../styles/page/__header/page__header.css'

function PageHeader(props) {
	return (
		<div className="page__header">
			<PageTitle text="Шаблоны"/>
			<BorderedButton title="Новый шаблон"/>
			<SearchBox />
		</div>
	);
}

export default PageHeader