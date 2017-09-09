import React, { PureComponent } from 'react';
import EditAnswerTextInput from '../controls/editAnswerTextInput';
import Button from '../../../../common/components/controls/button';
import { Icon } from 'react-fa';

class SelectAnswerBox extends PureComponent {
    render() {
        const answers = this.props.answers.slice();
        const type = this.props.inputType;
        const name = this.props.name;

        const deleteButtonIcon = <Icon name='trash'/>;
        
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
                                <Button content={deleteButtonIcon}
                                        onClick={() => this.props.onAnswerDelete(index)}
                                />
                            </div>
                        ))
                    }
                    <EditAnswerTextInput name={name}
                                         onInputChange={() => {}}      
                                         onClick={() => this.props.onAnswerAdd()}                                   
                    />
                </form>
            </div>
        );
    }
}

export default SelectAnswerBox;


