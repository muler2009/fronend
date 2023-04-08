import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logout } from '../features/auth/authSlice'

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    credentials: 'include', // to send cookie related issue in every request 
    
    prepareHeaders: (headers, api) => {  // prepareHeader Fn is use to inject headers on every request
        const { getState } = api
        const loginToken = getState().auth.token
        loginToken && headers.set('authorization', `Bearer ${loginToken}`)

        return headers
    }
})

const baseQueryWithRefreshAuthentication = async(args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    // Logic related to sending and attaching refresh token would be placed here
    if (result?.error?.originalStatus === 403) {
        console.log('sending refresh token')
        // send refresh token to get new access token 
        const refreshResult = await baseQuery('/refresh', api, extraOptions)
        console.log(refreshResult)
        if (refreshResult?.data) {
            const email = api.getState().auth.email
            // store the new token 
            api.dispatch(setCredentials({ ...refreshResult.data, email }))
            // retry the original query with new access token 
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logout())
        }
    }
    return result
}

const apiSlice = createApi({
    baseQuery: baseQueryWithRefreshAuthentication,
    refetchOnMountOrArgChange: true,
    tagTypes: ['Users', 'Module', 'UserTest'],
   // tagTypes: ['User'],   
    endpoints: builder => ({})
})

export default apiSlice