import { apiSlice } from "../../api/apiSlice";

const moduleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getModule: builder.query({
      query: () => ({
        url: `/getmodulesAPI`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Module", id })),
              { type: "Module", id: "LIST" },
            ]
          : [[{ type: "Module", id: "LIST" }]],
    }),

    getSingleModule: builder.query({
      query: (id) => ({
        url: `/modulestb/${id}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Module", id })),
              { type: "Module", id: "LIST" },
            ]
          : [[{ type: "Module", id: "LIST" }]],
    }),

    addModule: builder.mutation({
      query: (moduledata) => ({
        url: `/addmoduleAPI`,
        method: "POST",
        body: moduledata,
        credentials: "include",
      }),
      invalidatesTags: [{ type: "Module", id: "LIST" }],
    }),

    updateModule: builder.mutation({
      query: (moduledata) => ({
        url: `/modulestb/${moduledata.id}`,
        method: "PUT",
        credentials: "include",
        body: moduledata,
      }),
      invalidatesTags: [{ type: "Module", id: "LIST" }],
    }),

    deleteModule: builder.mutation({
      query: (id) => ({
        url: `/modulestb/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: [{ type: "Module", id: "LIST" }],
    }),
  }),
});

export const {
  useGetModuleQuery,
  useGetSingleModuleQuery,
  useAddModuleMutation,
  useDeleteModuleMutation,
} = moduleApiSlice;
export default moduleApiSlice;
