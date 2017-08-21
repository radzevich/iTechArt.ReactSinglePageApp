import React, { Component } from 'react';
import TemplateContent from './templateContent';
import '../../../../styles/page/_content/survey-templates/template-item/template-item.css';
import '../../../../styles/page/_content/survey-templates/template-item/__wrapper/template-item__wrapper.css';
import '../../../../styles/page/_content/survey-templates/template-item/__edit-buttons/template-item__edit-buttons.css';

function TemplateItem(props) {
    return (
        <div className="template-item">
            <div className="template-item__wrapper">
                <div className="template-item__edit-buttons" />
                <TemplateContent title={props.title}
                                 info={props.info}/>
            </div>
        </div>
    );
}

export default TemplateItem;