import React from 'react';

function ButtonComponent({type, name}){
    return(
        <button type={ type } name={ name } id={ name }>{ name }</button>
    )
}

export default ButtonComponent;