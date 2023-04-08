import apiSlice from "../../api/apiSlice";

const profileApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUserData: builder.query({
            query: () => ({
                url: `/usersprofile`,
                method: 'GET'
            }),
            providesTags: (result, error, id) => [{ type: 'Users', id }],
            refetchOnMountOrArgChange: true 
        }),

        getSingleUserData: builder.query({
            query: (id) => ({
                url: `/usersprofile/${id}`,
                method: 'GET',
                credentials: 'include',
            }),
            providesTags: (result, error, id) => [{ type: 'Users', id }],
            refetchOnMountOrArgChange: true 
        }),
        addUserProfile: builder.mutation({
            query: (body) => ({
                url: `/usersprofile`,
                method: "POST",
                body: body
            }),
            invalidatesTags: ['Users']
        })
    })
})


export const {
    useGetUserDataQuery,
    useGetSingleUserDataQuery,
    useAddUserProfileMutation
} = profileApiSlice