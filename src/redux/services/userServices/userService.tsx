/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("ACCESSTOKEN");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  reducerPath: "userApi",
  tagTypes: [],
  endpoints: (builder) => ({
    getUsers: builder.query<any, void>({
      query() {
        return {
          url: `users`,
        };
      },
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
