import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../features/auth/authApiSlice";
import { setCredentials } from "../features/auth/authSlice";

import { useDispatch } from "react-redux";

const useLogin = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const errRef = useRef()


    const [loginAttributes, setLoginAttributes] = useState({
        email: "",
        password: "",
        errorMessage: "",
        loginEmailFocus: false 
    })


    const handleLoginChanges = (event) => {
        const type = event.target.type
        const name = event.target.name 

        const value = type === 'checkbox' ? event.type.checked : event.target.value;
        setLoginAttributes(loginData => ({
            ...loginData,
            [name]: value
        })
        )
    }

    const [login, { data, error: error }] = useLoginMutation() 

    const handleEmailChange = (event) => {
        setLoginAttributes(prev => ({
            ...prev,
            loginEmail: event.target.value
        }))
    }

    const handlePasswordChange = (event) => {
        setLoginAttributes(prev => ({
            ...prev,
            loginPassword: event.target.value
        }))
    }

    {/* A function for handling login button clicked */}
    
    const loginClicked = async(event) => {
        event.preventDefault()

        try {
            const userData = await login({ email, password }).unwrap()
            dispatch(setCredentials({...userData, email }))
            localStorage.setItem("loginCredintials", JSON.stringify({
                userLogin: true,
                token: data.accessToken
            }))
           setLoginAttributes('')
            navigate('/student')

        }catch(error){     

            if(!error?.response){
                setErrorMessage('No server Response');
            }else if(error.response?.status === 400) {
                setErrorMessage(error.response.data.message);
            }else if(error.response?.status === 401) {
                setErrorMessage('Unauthorized')
            }else {
                setErrorMessage('Login Failed');
            }
               
        }      

    }
    
    return {
        email, password, errorMessage, errRef,
        setEmail, setPassword,
        setErrorMessage,
        loginClicked,
        handleEmailChange,
        handlePasswordChange,
        loginAttributes, 
        setLoginAttributes, 
        handleLoginChanges
        // onLoginButtonClicked 
    } 
}

export default useLogin