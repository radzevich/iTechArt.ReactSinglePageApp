import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Button extends PureComponent {
    render() {
        const innerContent = this.props.content;
        const onClick = this.props.onClick;

        return (
            <div className='button' onClick={() => onClick()}>
                {innerContent}
            </div>
        )
    }
}

Button.propTypes = {
    content: PropTypes.node,
    onClick: PropTypes.func.isRequired,
}

export default Button;