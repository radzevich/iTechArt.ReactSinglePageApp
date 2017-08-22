import React, { Component } from 'react';
import TemplateContent from './templateContent';
import EditButtons from './editButtons';
import '../../../../styles/page/_content/survey-templates/template-item/template-item.css';
import '../../../../styles/page/_content/survey-templates/template-item/__wrapper/template-item__wrapper.css';
import '../../../../styles/page/_content/survey-templates/template-item/__wrapper/_status/wrapper_status_active.css';
import '../../../../styles/page/_content/survey-templates/template-item/__edit-buttons/template-item__edit-buttons.css';

class TemplateItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="template-item" onClick={() => this.props.onClick()}>
                <div className={this.props.isSelected ? "template-item__wrapper wrapper_status_active" : "template-item__wrapper"}>
                    <EditButtons />
                    <TemplateContent title={this.props.title}
                                     description={this.props.description}
                                     info={this.props.info}/>
                </div>
            </div>
        );
    }
}

export default TemplateItem;