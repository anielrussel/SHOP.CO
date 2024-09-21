import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASEURL }),
  endpoints: (builder) => ({
    //Get all products
    getAllProducts: builder.query({
      query: () => "products",
    }),

    // Get product by id
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),

    //Get all products by category
    getAllProductsByCategory: builder.query({
      query: (category) => `products/category/${category}`,
    }),

    // Get all categories
    getAllProductCategories: builder.query({
      query: () => "products/categories",
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useGetAllProductsByCategoryQuery,
  useGetAllProductCategoriesQuery,
} = productsApi;
