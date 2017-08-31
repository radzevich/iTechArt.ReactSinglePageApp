import React, { PureComponent } from 'react';

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
        };
        this.dragStart = this.dragStart.bind(this);
        this.dragEnd = this.dragEnd.bind(this);
        this.dragOver = this.dragOver.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps);
    }   


    dragStart(e) {
        this.dragged = e.currentTarget;
        e.dataTransfer.effectAllowed = 'move';
        // Firefox requires dataTransfer data to be set
        e.dataTransfer.setData("text/html", e.currentTarget);
    }

    dragEnd(e) {
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

    dragOver(e) {
        e.preventDefault();
        this.dragged.style.display = "none";
        if (e.target.className == "placeholder") {
            return;
        }
        this.over = e.target;

        var relY = e.clientY - this.over.offsetTop;
        var height = this.over.offsetHeight / 2;
        var parent = e.target.parentNode;
        
        if (relY > height) {
            this.nodePlacement = "after";
            parent.insertBefore(placeholder, e.target.nextElementSibling);
        } else if (relY < height) {
            this.nodePlacement = "before"
            parent.insertBefore(placeholder, e.target);
        }
    }

    handleItemDrag(changedListOfQuestions) {
        this.props.onQuestionDrag(changedListOfQuestions);
    }

    render() {
        const allowDrag = 'true';
        const questionsToDisplay = this.state.questions;

        return (
            <ul onDragOver={this.dragOver}>
                {questionsToDisplay.map((question, index) => 
                    <li data-id={index}
                        key={index}
                        draggable={allowDrag}
                        onDragEnd={this.dragEnd}
                        onDragStart={this.dragStart}
                    >
                        {question.id}
                    </li>
                )}
            </ul>
        );
    }
}

export default QuestionsList;