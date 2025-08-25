import { apiSlice } from "../../api/apiSlice";
import { set_client_secret } from "./orderSlice";

export const authApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    // createPaymentIntent
    createPaymentIntent: builder.mutation({
      query: (data) => ({
        url: "api/order/create-payment-intent",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(set_client_secret(result.clientSecret));
        } catch (err) {
          // do nothing
        }
      },

    }),
    // saveOrder
    saveOrder: builder.mutation({
      query: (data) => ({
        url: "api/order/saveOrder",
        method: "POST",
        body: data,
      }),
      invalidatesTags:['UserOrders'],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          if (result) {
            localStorage.removeItem("couponInfo");
            localStorage.removeItem("cart_products");
            localStorage.removeItem("shipping_info");
          }
        } catch (err) {
          // do nothing
        }
      },

    }),
    // getUserOrders
    getUserOrders: builder.query({
      query: () => `/api/user-order`,
      providesTags:["UserOrders"],
      keepUnusedDataFor: 600,
    }),
    // getUserOrders
    getUserOrderById: builder.query({
      query: (id) => `/api/user-order/${id}`,
      providesTags: (result, error, arg) => [{ type: "UserOrder", id: arg }],
      keepUnusedDataFor: 600,
    }),
    // getUserOrders
    getShippingInfo: builder.query({
      query: () => `/api/business_setting/front_end/shipping_info`,
      keepUnusedDataFor: 600,
    }),
    // getUserOrders
    getShippingArea: builder.query({
      query: () => `/api/area`,
      keepUnusedDataFor: 600,
    }),
    // sslcommerze
    getSSLCommerzeOrderById: builder.query({
      query: (id) => `/api/sslcommerze/pay_sslcommerze/${id}`,
      keepUnusedDataFor: 600,
    }),
     // add category
     addSSLCommerzeOrderById: builder.mutation({
      query(id) {
        return {
          url: `/api/sslcommerze/pay_sslcommerze/${id}`,
          method: "POST",
          body: id,
        };
      },
    }),

  }),
});

export const {
  useCreatePaymentIntentMutation,
  useSaveOrderMutation,
  useGetUserOrderByIdQuery,
  useGetUserOrdersQuery,
  useGetShippingInfoQuery,
  useGetShippingAreaQuery,
  useAddSSLCommerzeOrderByIdMutation,
} = authApi;
