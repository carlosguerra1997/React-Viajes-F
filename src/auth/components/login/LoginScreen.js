import React from "react";
import './login.css';

import { useForm } from "../../../hooks/useForm";

export const LoginScreen = ({ history }) => {

    const [ formLoginValues, handleLoginInputChange ] = useForm({
        email: 'carlos@carlos.com',
        password: '123456'
    });

    const { email, password } = formLoginValues;

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Entro aqui');
        history.push('/');
    }

    return (
        <div id="loginScreen">
            <div id="loginBox">
                <h2> Iniciar Sesión </h2>
                <form id="loginForm" onSubmit={ handleLogin }>
                    <label> Email de usuario </label>
                    <input type="text" name="email" value={ email } onChange={ handleLoginInputChange } placeholder="Introduce el email del usuario" />

                    <label id="password"> Contraseña </label>
                    <input type="password" name="password" value={ password } onChange={ handleLoginInputChange } placeholder="Introduce la contraseña" />

                    <a id="forgotPwd" href="#"> Olvidaste la contraseña? </a>
                    <button id="btnSubmit" type="submit"> Iniciar Sesión </button>
                </form>
            </div>
        </div>
    )
}