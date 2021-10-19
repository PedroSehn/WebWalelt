import React from 'react';
import PropTypes from 'prop-types';



function FieldsetComponent({ type, name, validationFunction }){
    return(
    <label htmlFor={ name }>
        {name}
        <input type={type} name={name} id={name} onChange={validationFunction}></input>
    </label>)
}

FieldsetComponent.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    validationFunction: PropTypes.func.isRequired
}

export default  FieldsetComponent;