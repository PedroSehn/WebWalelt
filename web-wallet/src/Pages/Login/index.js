import React, {useEffect} from 'react';
import FieldsetComponent from '../../Components/FieldSetComponent/Fieldset';
import ButtonComponent from '../../Components/ButtonComponent';
//Todo Criar função para mudar o history do browser ao clicar no botão de login
let validationObject = {
    email: false,
    Senha: false,
    Nome: false,
    enableButton: false,
}

function shouldLoginButtonLock(){
    const {email, Senha, Nome} = validationObject;
    const targetButton = document.getElementById('Entrar');
    email && Senha && Nome ? validationObject.enableButton = true : validationObject.enableButton;
    validationObject.enableButton ? targetButton.disabled = false : targetButton.disabled = true;
}

function validateEmail(e){
    // const 'validationTest' retirada do stackoverflow 
    const validationTest = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validation = validationTest.test(String(e.target.value).toLowerCase());
    
    validation ? validationObject.email = true : validationObject.email;
    shouldLoginButtonLock()
}

function validateInput(e){
    const {target} = e;
    const TREE = 3;
    target.value.length > TREE ? validationObject[target.name] = true : validationObject;
    shouldLoginButtonLock()
}


function LoginPage(){
    useEffect(() => {shouldLoginButtonLock()}, []);
    return(
        <form id='loginForm'>
            <FieldsetComponent type='text' name='Nome' validationFunction={validateInput}/>
            <FieldsetComponent type='email' name='Email' validationFunction={validateEmail}/>
            <FieldsetComponent type='password' name='Senha' validationFunction={validateInput}/>
            <ButtonComponent type='button' name='Entrar' buttonFunction={shouldLoginButtonLock}/>
        </form>
    )
}

export default LoginPage;