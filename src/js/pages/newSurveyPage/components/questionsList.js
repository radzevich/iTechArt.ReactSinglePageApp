import React, { PureComponent } from 'react';
import Question from '../../common/components/question';

/**
 * The next code to allow questions dragging was taken from the http://webcloud.se/sortable-list-component-react-js/.
 * You may visit this page to make it more clearly in your mind.
 */

const placeholder = document.createElement('li');
placeholder.className = 'placeholder';

class QuestionsList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            questions: this.props.questions.slice(),
            activeQuestionIndex: null,
        };

        this.handleQuestionActiveClick = this.handleQuestionActiveClick.bind(this);

        this.handleDragStart = this.handleDragStart.bind(this);
        this.handleDragEnd = this.handleDragEnd.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps);
    }   

    handleDragStart(event) {
        this.dragged = event.currentTarget;
        event.dataTransfer.effectAllowed = 'move';
        // Firefox requires dataTransfer data to be set
        event.dataTransfer.setData("text/html", event.currentTarget);
    }

    handleDragEnd(event) {
        this.dragged.style.display = "block";
        this.dragged.parentNode.removeChild(placeholder);
        // Update questions
        var questions = this.state.questions;
        var from = Number(this.dragged.dataset.id);
        var to = Number(this.over.dataset.id);

        if (from < to) {
            to--;
        }
        if(this.nodePlacement == "after") {
            to++;
        }

        console.log(to, from);

        const lowerIndex = (to < from) ? to : from;
        const upperIndex = (to < from) ? from : to;

        const changedListOfQuestions = [
            ...questions.slice(0, lowerIndex),
            questions[upperIndex],
            ...questions.slice(lowerIndex, upperIndex),
            ...questions.slice(upperIndex + 1, questions.length),
        ]

        this.handleItemDrag(changedListOfQuestions);
    }

    handleDragOver(event) {
        event.preventDefault();
        this.dragged.style.display = "none";
        if (event.target.className == "placeholder") {
            return;
        }
        this.over = event.target;

        var relY = event.clientY - this.over.offsetTop;
        var height = this.over.offsetHeight / 2;
        var parent = event.target.parentNode;
        
        if (relY > height) {
            this.nodePlacement = "after";
            parent.insertBefore(placeholder, event.target.nextElementSibling);
        } else if (relY < height) {
            this.nodePlacement = "before"
            parent.insertBefore(placeholder, event.target);
        }
    }

    handleItemDrag(changedListOfQuestions) {
        this.props.onQuestionListUpdate(changedListOfQuestions);
    }

    handleQuestionActiveClick(activeQuestionId) {
        this.setState(prevState => {
            return Object.assign({}, prevState, {
                activeQuestionIndex: activeQuestionId,
            });
        });
    }

    handleQuestionUpdate(updatedQuestion) {
        const indexOfupdatedQuestion = updatedQuestion.id;
        const updatedListOfQuestions = [
            ...this.state.questions.slice(0, indexOfupdatedQuestion),
            updatedQuestion,
            ...this.state.questions.slice(indexOfupdatedQuestion + 1, this.state.questions.length),
        ];
        this.setState
    }

    render() {
        const allowDrag = 'true';
        const questionsToDisplay = this.state.questions;
console.log(questionsToDisplay);
        return (
            <ul onDragOver={this.handleDragOver}>
                {questionsToDisplay.map((question, index) => 
                    <li data-id={index}
                        key={index}
                        draggable={allowDrag}
                        onDragEnd={this.handleDragEnd}
                        onDragStart={this.handleDragStart}
                    >
                        <Question infoToCreateQuestion={question}
                                  isInEditMode={(this.state.activeQuestionIndex === question.id) ? true : false} 
                                  onQuestionFocus={() => this.handleQuestionActiveClick(question.id)}
                                  onQuestionUpdate={(updatedQuestion) => this.handleQuestionUpdate(updatedQuestion)}
                        />
                    </li>
                )}
            </ul>
        );
    }
}

export default QuestionsList;