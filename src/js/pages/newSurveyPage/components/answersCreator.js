import React, { PureComponent } from 'react';
import SelectAnswerBox from './editAnswersTemplates/selectAnswerBox';
import TextAnswerQuestion from './editAnswersTemplates/textAnswerQuestion';
import FileAnswerQuestion from './editAnswersTemplates/fileAnswerQuestion';
import RatingAnswerQuestion from './editAnswersTemplates/ratingAnswerQuestion';

import { 
    questionTypesName,
    SELECT_QUESTION__DEFAULT_TEXT,
    RANGE_QUESTION__MIN_VALUE_ID,
    RANGE_QUESTION__MAX_VALUE_ID, 
    RANGE_QUESTION__USER_VALUE_ID,
    RANGE_QUESTION__DEFAULT_MIN_VALUE,
    RANGE_QUESTION__DEFAULT_MAX_VALUE,
    RANGE_QUESTION__DEFAULT_USER_VALUE,
 } from '../../../types/types'

class AnswersCreator extends PureComponent {
    constructor(props) {
        super(props);

        const sourceAnswersListToDisplay = this.props.answers || this.defaultAnswers;
        this.state = {
            answers: sourceAnswersListToDisplay,
            nextCreatedAnswerId: sourceAnswersListToDisplay.length + 1,
        }

        this.handleAnswerAdd = this.handleAnswerAdd.bind(this);
        this.handleAnswerEdit = this.handleAnswerEdit.bind(this);
        this.handleAnswerDelete = this.handleAnswerDelete.bind(this);
        this.handleAnswersChanged = this.handleAnswersChanged.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.type === questionTypesName.SINGLE || this.props.type === questionTypesName.MULTI) {
            const nextCreatedAnswerId = (this.state.answers.length < nextProps.answers.length)
                ? this.state.nextCreatedAnswerId + 1
                : this.state.nextCreatedAnswerId;
            this.setState({
                answers: nextProps.answers,
                nextCreatedAnswerId: nextCreatedAnswerId,
            });
        }
    }

    get defaultAnswers() {
        const parentQuestionId = this.props.id;
        switch(this.props.type) {
            case questionTypesName.SINGLE:
            case questionTypesName.MULTI:
                return [
                    {
                        id: 1,
                        value: SELECT_QUESTION__DEFAULT_TEXT + ' ' + 1,
                    },
                    {
                        id: 2,
                        value: SELECT_QUESTION__DEFAULT_TEXT + ' ' + 2,
                    },
                    {
                        id: 3,
                        value: SELECT_QUESTION__DEFAULT_TEXT + ' ' + 3,
                    },
                ];
            case questionTypesName.RANGE:
                return [
                    {
                        id: RANGE_QUESTION__MIN_VALUE_ID,
                        value: RANGE_QUESTION__DEFAULT_MIN_VALUE,
                    },
                    {
                        id: RANGE_QUESTION__MAX_VALUE_ID,
                        value: RANGE_QUESTION__DEFAULT_MAX_VALUE,
                    },
                    {
                        id: RANGE_QUESTION__USER_VALUE_ID,
                        value: RANGE_QUESTION__DEFAULT_USER_VALUE,
                    },
                ];
            case questionTypesName.TEXT:
            case questionTypesName.FILE:
            case questionTypesName.RATING:
                return {
                    id: 0,
                    value: '',
                }
        }

    }

    createDefaultSelectAnswer() {
        const idOfAnswerToCreate = this.state.nextCreatedAnswerId;
        return {
            id: idOfAnswerToCreate,
            value: SELECT_QUESTION__DEFAULT_TEXT + ' ' + (this.state.answers.length + 1),
        };
    }

    handleAnswersChanged(changedAnswers) {
        this.props.onAnswersChange(changedAnswers);
    }

    handleAnswerAdd() {
        const answerToAdd = this.createDefaultSelectAnswer(this.state.nextCreatedAnswerId);
        const updatedAnswersList = [
            ...this.state.answers,
            answerToAdd,
        ]
        this.handleAnswersChanged(updatedAnswersList);
    }

    handleAnswerEdit(changedAnswerIndex, changedAnswerValueToSet) {
        const currentAnswersState = this.state.answers;
        const answerWithChangedText = Object.assign({}, currentAnswersState[changedAnswerIndex], {
            value: changedAnswerValueToSet,
        });
        const changedAnswersState = [
            ...currentAnswersState.slice(0, changedAnswerIndex),
            answerWithChangedText,
            ...currentAnswersState.slice(changedAnswerIndex + 1, currentAnswersState.length),
        ]
        this.handleAnswersChanged(changedAnswersState);
    }

    handleAnswerDelete(indexOfAnswerToDelete) {
        debugger;
        const currentAnswersState = this.state.answers;
        if (currentAnswersState.length > 1) {
            const updatedAnswersList = [
                ...currentAnswersState.slice(0, indexOfAnswerToDelete),
                ...currentAnswersState.slice(indexOfAnswerToDelete + 1, currentAnswersState.length),
            ]
            debugger;
            this.handleAnswersChanged(updatedAnswersList);
        } else {
            alert('Нельзя удалить все вопросы!');
        }
    }

    get answerTemplate() {
        switch (this.props.type) {
            case questionTypesName.SINGLE:
                return <SelectAnswerBox inputType={'radio'} 
                                        answers={this.state.answers.slice()}
                                        name={this.props.id}
                                        onAnswerAdd={() => this.handleAnswerAdd()}
                                        onAnswerEdit={(indexOfAnswerToEdit, newValueToSet) => this.handleAnswerEdit(indexOfAnswerToEdit, newValueToSet)}
                                        onAnswerDelete={(indexOfAnswerToDelete) => this.handleAnswerDelete(indexOfAnswerToDelete)}
                />
            case questionTypesName.MULTI:
                return <SelectAnswerBox inputType={'checkbox'} 
                                        answers={this.state.answers.slice()}
                                        name={this.props.id}
                                        onAnswerAdd={() => this.handleAnswerAdd()}
                                        onAnswerEdit={(indexOfAnswerToEdit, newValueToSet) => this.handleAnswerEdit(indexOfAnswerToEdit, newValueToSet)}
                                        onAnswerDelete={(indexOfAnswerToDelete) => this.handleAnswerDelete(indexOfAnswerToDelete)}
                                  />
            case questionTypesName.TEXT:
                return <TextAnswerQuestion/>
            case questionTypesName.FILE:
                return <FileAnswerQuestion/>
            case questionTypesName.RATING:
                return <RatingAnswerQuestion name={this.props.id}
                                             value={+this.state.answers.value}
                />
            case questionTypesName.RANGE:
                // return <RangeInput />
                return <SelectAnswerBox answers={this.state.answers.slice()}/>
        }
    }

    render() {
        return this.answerTemplate;
    }
}

export default AnswersCreator;