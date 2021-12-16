import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { useDispatch } from 'react-redux';

import { useForm } from '../../hooks/useForm';
import { SetError, removeError } from '../../actions/ui';
import { Store } from '../../store/Store';

export const RegisterScreen = () => {
    const dispatch = useDispatch();
    const {loading, messageError} = Store.getState().ui;
    console.log(messageError);
    const [ formValues, handleInputChange, reset] = useForm({
        name: "David",
        email: "david@gmail.com",
        password: "123456",
        password2: "123456" 
    });
    const { email, name, password, password2 } = formValues;
    const handleRegister = (e) => {
        e.preventDefault();
        if(isFormValid()) return  true;
    }

    const isFormValid = () => {
        if(name.trim().length === 0){ dispatch(SetError('Name is not valid'));  return false;}
        if(!validator.isEmail(email)){ dispatch(SetError('Email is not valid')); return false;}
        if(password !== password2 || password.length < 5) {dispatch(SetError('Password is not valid')); return false;}
        dispatch(removeError(true));
        return  true;
    } 

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={handleRegister}>
               {!isFormValid() &&
                    <span className="auth__alert-error">Faild</span>
               }
                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />

                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

               

                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}