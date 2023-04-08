import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        name: "",
        email: null,
        token: "",
    },
    reducers: {
        setCredentials: (state, action) => {
            const { email, accessToken } = action.payload
            state.email = email
            state.token = accessToken  
        },
        logout: (state, action) => {
            state.email = null
            state.token = null
        }
    }, 
})

export const { setCredentials, logout } = authSlice.actions
export const currentUser = (state) => state.auth.name
export const currentUserEmail = (state) => state.auth.email
export const currentUserToken = (state) => state.auth.token

export default authSlice.reducer