import React from 'react';
import FieldsetComponent from '../../Components/FieldSetComponent/Fieldset';
function LoginPage(){
    return(
        <form id='loginForm'>
            <FieldsetComponent type='email' name='email'/>
            <FieldsetComponent type='password' name='password'/>
        </form>
    )
}

export default LoginPage;