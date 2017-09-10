import React, { PureComponent } from 'react';
import QuestionCreator from './questionCreator';

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
            questions: this.props.questions,
            activeQuestionIndex: null,
        };

        this.handleQuestionActiveClick = this.handleQuestionActiveClick.bind(this);

        this.handleDragStart = this.handleDragStart.bind(this);
        this.handleDragEnd = this.handleDragEnd.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        let activeQuestionIndex = null;
        if (this.state.questions.length < nextProps.questions.length) {
            const newQuestionIndex = nextProps.questions.length - 1;
            activeQuestionIndex = newQuestionIndex;
        }
        this.setState(Object.assign({}, this.state, {
            questions: nextProps.questions,
            activeQuestionIndex: activeQuestionIndex,
        }));
    }

    shouldComponentUpdate(nextProps, nextState) {
        if ((nextProps.questions.length !== this.state.questions.length) || 
            (this.state.activeQuestionIndex !== nextState.activeQuestionIndex)) {
            return true;
        } else if (nextProps === this.props) {
            return true;
        } else if (this.state.questions === nextProps.questions) {
            return true;
        } else {
            return false;
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if ((prevState.activeQuestionIndex !== this.state.activeQuestionIndex) && 
            (this.state.activeQuestionIndex === null)) {
            this.props.onQuestionListUpdate(this.state.questions);
        }
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
        this.setState(prevState => Object.assign({}, prevState, {
            activeQuestionIndex: activeQuestionId,
        }));
    }

    handleQuestionFocusLost() {
        this.setState(prevState => Object.assign({}, prevState, {
            activeQuestionIndex: null,
        }))
    }

    handleQuestionUpdate(indexOfUpdatedQuestion, updatedQuestionState) {
        if (updatedQuestionState === this.state.questions[indexOfUpdatedQuestion]) {
            this.handleQuestionFocusLost();
        } else {
            const sourceListOfQuestions = this.state.questions;
            const updatedListOfQuestions = [
                ...sourceListOfQuestions.slice(0, indexOfUpdatedQuestion),
                updatedQuestionState,
                ...sourceListOfQuestions.slice(indexOfUpdatedQuestion + 1, sourceListOfQuestions.length),
            ]
            this.props.onQuestionListUpdate(updatedListOfQuestions);
        }
    }

    handleQuestionDelete(indexOfDeletedQuestion) {
        const sourceListOfQuestions = this.state.questions;
        const updatedListOfQuestions = [
            ...sourceListOfQuestions.slice(0, indexOfDeletedQuestion),
            ...sourceListOfQuestions.slice(indexOfDeletedQuestion + 1, sourceListOfQuestions.length),
        ]
        this.props.onQuestionListUpdate(updatedListOfQuestions);
    }

    render() {
        const allowDrag = 'true';
        const questionsToDisplay = this.state.questions;

        return (
            <ul onDragOver={this.handleDragOver}>
                {questionsToDisplay.map((question, index) => 
                    <li data-id={index}
                        key={index}
                        draggable={allowDrag}
                        onDragEnd={this.handleDragEnd}
                        onDragStart={this.handleDragStart}
                    >
                        <div className='question' draggable='false'>
                            <QuestionCreator questionModel={question}
                                            isInEditMode={(this.state.activeQuestionIndex === index) ? true : false} 
                                            onQuestionFocus={() => this.handleQuestionActiveClick(index)}
                                            onQuestionUpdate={(updatedQuestion) => this.handleQuestionUpdate(index, updatedQuestion)}
                                            onDeleteButtonClick={() => this.handleQuestionDelete(index)}
                            />
                        </div>
                    </li>
                )}
            </ul>
        );
    }
}

export default QuestionsList;