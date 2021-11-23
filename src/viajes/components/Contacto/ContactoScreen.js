import React from "react";
import './ContactoScreen.css';

import { useForm } from "../../../hooks/useForm";

export const ContactoScreen = () => {

    const [ formContactValues, handleContactInputChange ] = useForm({
        username: 'Carlos Guerra',
        email: 'carlos@carlos.com',
        msg: 'Esto está funcionando'
    });

    const { username, email, msg } = formContactValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, email, msg);
    }

    return (
        <div id="content">
            <h2 id="titulo"> Contáctanos </h2>
            <form id="contactoForm" onSubmit={ handleSubmit }>
                <label className="labelContacto"> Nombre </label>
                <input className="inputContacto"  name="username" value={ username } onChange={ handleContactInputChange } type="text" placeholder="Introduce tu nombre" />

                <label className="labelContacto"> Email </label>
                <input className="inputContacto" name="email" value={ email } onChange={ handleContactInputChange } type="email" placeholder="Introduce tu email" />

                <label className="labelContacto"> Mensaje </label>
                <textarea id="formTextArea" name="msg" value={ msg } onChange={ handleContactInputChange } placeholder="Escribe tu mensaje"></textarea>

                <button id="btnSubmit" type="submit"> Enviar mensaje </button>
            </form>
        </div>
    )
}