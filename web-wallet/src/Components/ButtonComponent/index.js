import React from 'react';
import PropTypes from 'prop-types';

function ButtonComponent({type, name, buttonFunction}){
    return(
        <button type={ type } name={ name } id={ name } onClick={buttonFunction}>{ name }</button>
    )
}

ButtonComponent.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    buttonFunction: PropTypes.func.isRequired,
}

export default ButtonComponent;