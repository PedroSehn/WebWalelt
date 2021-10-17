import React from 'react';

function FieldsetComponent({type, name}){
    return(
    <label htmlFor={ name }>
        {name}
        <input type={type} name={name} id={name}></input>
    </label>)
}

export default  FieldsetComponent;