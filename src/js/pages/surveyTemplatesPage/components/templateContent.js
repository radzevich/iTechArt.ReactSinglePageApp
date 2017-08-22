import React, { Component } from 'react';
import Button from '../../../common/components/controls/borderedButton';
import '../../../../styles/page/_content/survey-templates/template-item/__content/template-item__content.css';
import '../../../../styles/page/_content/survey-templates/template-item/__info/template-item__info.css';
import '../../../../styles/page/_content/survey-templates/template-item/__text/template-item__text.css';

class TemplateContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            questionsCount: props.info.questionsCount,
            pagesCount: props.info.pagesCount,
            description: props.description,
        }
    }
    render() {
        return (
            <div className="template-item__content">
                <h2 className="template-item__title">{this.state.title}</h2>
                <div className="template-item__text">
                    <p>{this.state.description}</p>
                </div>    
                <div className="template-item__info">
                    <span className="template-item__info_count_questions">Вопросов: {this.state.questionsCount}</span>
                    <span className="template-item__info_count_pages">Страниц: {this.state.pagesCount}</span>
                </div>
                <Button title="Создать опрос" />
            </div>
        );
    }
}

export default TemplateContent;