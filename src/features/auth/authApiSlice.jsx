// Extended Slice for the
import apiSlice from "../../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/authenticationAPI/login',
                method: 'POST',
                body: {...credentials}
            }),
            providesTags: ['Users']
        }), 
    })
})

export const {
    useLoginMutation
} = authApiSlice