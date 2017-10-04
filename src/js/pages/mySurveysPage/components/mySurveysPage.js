import React, { Component } from 'react';
import PageHeader from '../../common/components/pageHeader';
import { Get } from 'react-axios';
import axios from "axios";
import { apiRoutes } from '../../../types/types';

function MySurveysPage() {
	const axiosInstance = axios.create({
		baseURL: apiRoutes.BASE,
		timeout: 2000,
		headers: { 'X-Custom-Header': 'foobar' }
	});
	
	return (
		<Get url={apiRoutes.GET_SURVEYS}
			 instance={axiosInstance}
		   >
		   {(error, response, isLoading) => {
					if (error) {
						return (<div>Something bad happened: {error.message}</div>)
					} else if(isLoading) {
						return (<div>Loading...</div>)
					} else if(response !== null) {
						return (
							<div className="page page_content_my-surveys">
								<PageHeader pageTitle="Мои опросы"
											buttonText="Создать опрос"/>
							</div>
						)
				  	}	
			 	}	
			}
		</Get>
	)	
}

export default MySurveysPage