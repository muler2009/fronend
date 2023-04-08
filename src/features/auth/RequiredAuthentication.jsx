import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { currentUserToken } from '../auth/authSlice'

const RequiredAuthentication = () => {

  const token = useSelector(currentUserToken)
  
  const locate = useLocation()

  return (
      token
      ? <Outlet />
      : <Navigate to="/login" state={{from: locate}} replace />
  )
}

export default RequiredAuthentication