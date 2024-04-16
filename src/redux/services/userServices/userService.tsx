/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASEURL } from "../../../constants";

export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASEURL}/api/v1/`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("ACCESSTOKEN");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
        headers.set("ngrok-skip-browser-warning", true);
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
