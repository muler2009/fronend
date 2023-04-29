// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { setCredentials, logout } from "../features/auth/authSlice";

// const baseQuery = fetchBaseQuery({
//   baseUrl: "http://localhost:5000",
//   credentials: "include", // to send cookie related issue in every request

//   prepareHeaders: (headers, api) => {
//     // prepareHeader Fn is use to inject headers on every request
//     const { getState } = api;
//     const loginToken = getState().auth.token;
//     loginToken && headers.set("authorization", `Bearer ${loginToken}`);

//     return headers;
//   },
// });

// const baseQueryWithRefreshAuthentication = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions);

//   // Logic related to sending and attaching refresh token would be placed here
//   if (result?.error?.originalStatus === 403) {
//     console.log("sending refresh token");
//     // send refresh token to get new access token
//     const refreshResult = await baseQuery("/refresh", api, extraOptions);
//     console.log(refreshResult);
//     if (refreshResult?.data) {
//       const email = api.getState().auth.email;
//       // store the new token
//       api.dispatch(setCredentials({ ...refreshResult.data, email }));
//       // retry the original query with new access token
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       api.dispatch(logout());
//     }
//   }
//   return result;
// };

// const apiSlice = createApi({
//   baseQuery: baseQueryWithRefreshAuthentication,
//   refetchOnMountOrArgChange: true,
//   tagTypes: ["Users", "Module", "UserTest"],
//   // tagTypes: ['User'],
//   endpoints: (builder) => ({}),
// });

// export default apiSlice;

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
    // QUESTIONS
    //---------------------------------
    getQuestions: builder.query({
      query: () => "questions",
      providesTags: [API_TAGS.QUESTIONS],
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
  }),
});

export const {
  // QUESTIONS
  //---------------------------------
  useGetQuestionsQuery,

  // REGISTER_STUDENT
  //---------------------------------
  useRegisterStudentMutation,
  useVerifyMutation,
} = apiSlice;
