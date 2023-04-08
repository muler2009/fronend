import apiSlice from "../../api/apiSlice";

export const registerApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getRegisteredData: builder.query({
            query: () => ({
                url: '/getdata',
                method: 'GET'
            }),
            //transformResponse: response => response.sort((a,b) => b.id - a.id),
            providesTags: ['Users'], 
            keepUnusedDataFor: 5,
        }),
        registerUserData: builder.mutation({
            query: (body) => ({
                url: '/authenticationAPI/register',
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['Users']
        }),

        updateUserData: builder.mutation({
            query: (id) => ({
                url: `/registration/${id}`,
                method: 'PUT',
            })
        }),
        deleteStudent: builder.mutation({
            query: ({ id }) => ({
                url: `/registration/${id}`,
                method: 'DELETE',
                body: id
            }),
            invalidatesTags: ['User']

        }),

    })
})

export const { 
    useGetRegisteredDataQuery,
    useRegisterUserDataMutation,
    useDeleteStudentMutation,
    useUpdateUserDataMutation
} = registerApiSlice