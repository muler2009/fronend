import React from 'react'
import { logout } from '../features/auth/authSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const useLogout = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onLogoutClicked = async(event) => {
        event.preventDefault()
        try{
            dispatch(logout())
            localStorage.removeItem("loginCredintials")
            navigate('/')
        }catch(error){
            console.log("error on loggin out")
        }
    }

  return { onLogoutClicked }
}

export default useLogout