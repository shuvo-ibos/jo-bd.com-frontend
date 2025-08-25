import { apiSlice } from "../api/apiSlice";

export const brandApi = apiSlice.injectEndpoints({
  overrideExisting:true,
  endpoints: (builder) => ({
    getActiveBrands: builder.query({
      query: () => `/api/brand/active`
    }),
    getComment: builder.query({
      query: (blogId) => `/api/comment/${blogId}`
    }),
    addComment: builder.mutation({
      query: (data) => ({
        url: "/api/comment/store",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
 useGetActiveBrandsQuery,
 useGetCommentQuery,
 useAddCommentMutation,
} = brandApi;
