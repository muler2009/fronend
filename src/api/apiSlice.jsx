import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, API_TAGS } from "../components/common/apiTags";

export const apiSlice = createApi({
  reducerpath: "apiSlice",

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth?.user?.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  tagTypes: Object.values(API_TAGS),
  refetchOnFocus: true,
  refetchOnMountOrArgChange: true,

  endpoints: (builder) => ({
    // ME
    //---------------------------------
    getMe: builder.query({
      query: () => "me",
      providesTags: [],
    }),

    // QUESTIONS
    //---------------------------------
    getQuestions: builder.query({
      query: () => "questions",
      providesTags: [API_TAGS.QUESTIONS],
    }),
    postSubscribedQuestions: builder.mutation({
      query: (data) => ({
        url: `subscribed-questions`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [API_TAGS.QUESTIONS],
    }),

    // DEPARTMENT
    //---------------------------------
    getDepartments: builder.query({
      query: () => "departments",
      providesTags: [API_TAGS.DEPARTMENT],
    }),

    // REGISTER_STUDENT
    //---------------------------------
    registerStudent: builder.mutation({
      query: (data) => ({
        url: `register-student`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [API_TAGS.REGISTER_STUDENT],
    }),
    verify: builder.mutation({
      query: (data) => ({
        url: `user-verification/${data?.token}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [API_TAGS.REGISTER_STUDENT],
    }),
    forgot: builder.mutation({
      query: (data) => ({
        url: `forgot-password`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [API_TAGS.REGISTER_STUDENT],
    }),
    forgotVerify: builder.mutation({
      query: (data) => ({
        url: `forgot-password/${data?.token}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [API_TAGS.REGISTER_STUDENT],
    }),
    resetPassToken: builder.mutation({
      query: (data) => ({
        url: `reset-pass-token/${data?.token}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [API_TAGS.REGISTER_STUDENT],
    }),
    // SUBSCRIPTIONS
    //---------------------------------
    getSubscription: builder.query({
      query: () => "subscriptions",
      providesTags: [API_TAGS.SUBSCRIPTIONS],
    }),
    getAllSubscription: builder.query({
      query: () => "all-subscriptions",
      providesTags: [API_TAGS.SUBSCRIPTIONS, API_TAGS.ALL_SUBSCRIPTIONS],
    }),
    subscribe: builder.mutation({
      query: (data) => ({
        url: `subscribe`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [API_TAGS.SUBSCRIPTIONS],
    }),

    // ASSIST_ADMIN
    //---------------------------------
    getAssistAdmin: builder.query({
      query: () => "assist-admins",
      providesTags: [API_TAGS.ASSIST_ADMIN],
    }),
    addAssistAdmin: builder.mutation({
      query: (data) => ({
        url: `assist-admins`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [API_TAGS.ASSIST_ADMIN],
    }),
    approveSubscription: builder.mutation({
      query: (data) => ({
        url: `approve-subscription`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [
        API_TAGS.ASSIST_ADMIN,
        API_TAGS.MODULES,
        API_TAGS.SUBSCRIPTIONS,
      ],
    }),
  }),
});

export const {
  // ME
  useGetMeQuery,

  // QUESTIONS
  //---------------------------------
  useGetQuestionsQuery,
  usePostSubscribedQuestionsMutation,

  // DEPARTMENT
  //---------------------------------
  useGetDepartmentsQuery,

  // REGISTER_STUDENT
  //---------------------------------
  useRegisterStudentMutation,
  useVerifyMutation,
  useResetPassTokenMutation,

  // SUBSCRIPTIONS
  //---------------------------------
  useGetSubscriptionQuery,
  useGetAllSubscriptionQuery,
  useSubscribeMutation,

  // ASSIST_ADMIN
  //---------------------------------
  useGetAssistAdminQuery,
  useAddAssistAdminMutation,
  useApproveSubscriptionMutation,
  useForgotVerifyMutation,
  useForgotMutation,
} = apiSlice;
