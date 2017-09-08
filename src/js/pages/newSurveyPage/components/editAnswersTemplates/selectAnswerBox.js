import React, { PureComponent } from 'react';
import EditAnswerTextInput from '../controls/editAnswerTextInput';

class SelectAnswerBox extends PureComponent {
    constructor(props) {
        super(props);
        this.handleAnswerEdit = this.handleAnswersChanged.bind(this);
    }

    handleAnswersChanged(changedAnswers) {
        this.props.onAnswersChange(changedAnswers);
    }

    handleAnswerTextChanged(index, changedAnswerTextToSet) {
        
    }

    render() {
        const answers = this.props.answers.slice();
        const type = this.props.inputType;
        const name = this.props.name;

        return (
            <div className='answers_type_select'>
                <form>
                    {
                        answers.map((answer, index) => (
                            <div className='answer answer_type_single' key={answer.id}>
                                <input type={type}
                                       name={name}
                                />
                                <EditAnswerTextInput id={answer.id}
                                                     value={answer.value}
                                                     name={name}
                                                     onInputChange={(changedInputValue) => this.props.onAnswerEdit(index, changedInputValue)}
                                                     
                                />
                            </div>
                        ))
                    }
                </form>
            </div>
        );
    }
}

export default SelectAnswerBox;


