import React, { Component } from 'react';
import TemplateContent from './templateContent';
import EditButtons from './editButtons';
import '../../../../styles/page/_content/survey-templates/template-item/template-item.css';
import '../../../../styles/page/_content/survey-templates/template-item/__wrapper/template-item__wrapper.css';
import '../../../../styles/page/_content/survey-templates/template-item/__wrapper/_status/wrapper_status_active.css';
import '../../../../styles/page/_content/survey-templates/template-item/__edit-buttons/template-item__edit-buttons.css';

// function TemplateItem(props) {
//     return (
//         <div className="template-item" onClick={() => props.onClick(props.id)}>
//             <div className={"template-item__wrapper " + props.isSelected ? "active" : ""}>
//                 <div className="template-item__edit-buttons" />
//                 <TemplateContent title={props.title}
//                                  info={props.info}/>
//             </div>
//         </div>
//     );
// }

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
                                     info={this.props.info}/>
                </div>
            </div>
        );
    }
}

export default TemplateItem;