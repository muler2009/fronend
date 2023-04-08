import apiSlice from "../../api/apiSlice";

export const questionbankSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getQuestion: builder.query({
            query: (page = 1) => ({
                url: `/api/getquestions?page=${page}` ,
                method: 'GET',

            }),

        }) ,
        addQuestion: builder.mutation({
            query: (data) => ({
                url: `/questionOptionThree`,
                method: 'POST',
                body: data
            })
        }),

        importQuestion: builder.mutation({
            query: (file) => ({
                url: `questionsfromcsv`,
                method: "POST",
                body: file
            })
        })
    })

})


export const { 
    useGetQuestionQuery,
    useImportQuestionMutation,
    useAddQuestionMutation
 } = questionbankSlice