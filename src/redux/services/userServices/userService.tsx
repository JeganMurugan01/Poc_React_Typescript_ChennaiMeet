/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BASE_URL}/api/v1/`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("ACCESSTOKEN");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
        headers.set("ngrok-skip-browser-warning", "true");
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
    getUsersById: builder.query<any, { id: string }>({
      query({ id }) {
        return {
          url: `findUserById/${id}`,
        };
      },
    }),
    deleteUser: builder.mutation<any, { id: string }>({
      query({ id }) {
        return {
          url: `deleteUser/${id}`,
          method: "DELETE",
        };
      },
    }),
    userConfig: builder.mutation<any, { userType: string; userId: string }>({
      query(body) {
        return {
          url: "userConfig",
          method: "PUT",
          body,
        };
      },
    }),
    userMappedLanguage: builder.mutation<any, { id: string }>({
      query(body) {
        return {
          url: "userMappedLanguage",
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUsersByIdQuery,
  useUserConfigMutation,
  useUserMappedLanguageMutation,
} = userApi;
