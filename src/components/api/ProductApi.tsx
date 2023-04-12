import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://62b1bba0196a9e98703c1172.mockapi.io' }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    // Product
    fetchAllProduct: builder.query({
      query: () => ({
         url: '/itemsSneakers'
      })
    }),
    // Product in Basket
    fetchAllBasket: builder.query({
      query: () => ({
         url: '/card'
      }),
      providesTags: result => ['Post']
    }),
    // Product in Basket create
    createBasket: builder.mutation({
      query: (obj) => ({
         url: '/card',
         method: 'POST',
         body: obj, 
      }),
      invalidatesTags: ['Post'],
    }),
    // Product in Basket delete
    deleteBasket: builder.mutation({
      query: () => ({
         url: '/card',
         method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),
    // Product in Favourite
    fetchAllFavourite: builder.query({
      query: () => ({
         url: '/favorite'
      })
    }),
    // Product in Basket create
    createFavourite: builder.mutation({
      query: (obj) => ({
         url: '/favorite',
         method: 'POST',
         body: obj, 
      }),
      invalidatesTags: ['Post'],
    }),
    // Product in Basket delete
    deleteFavourite: builder.mutation({
      query: (obj) => ({
         url: `/favorite/${obj.id}`,
         method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),
  }),
})