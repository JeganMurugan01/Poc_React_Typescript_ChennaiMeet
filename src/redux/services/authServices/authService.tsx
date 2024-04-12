import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface LoginResponse {
  token: string;
}

export const authApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/v1/" }),
  tagTypes: [],
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, Partial<LoginResponse>>({
      query(body) {
        return {
          url: `login`,
          method: "POST",
          body,
        };
      },
    }),
    signUp: builder.mutation<LoginResponse, Partial<LoginResponse>>({
      query(body) {
        return {
          url: `signup`,
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = authApi;


