/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fileServiceApi = createApi({
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
  reducerPath: "getAllFilesApi",
  tagTypes: [],
  endpoints: (builder) => ({
    getAllFiles: builder.query<any, { page: number; limit: number }>({
      query: ({ page, limit }) => {
        return {
          url: `file/getAllFiles/?page=${page}&limit=${limit}`,
        };
      },
    }),
  }),
});
export const { useGetAllFilesQuery } = fileServiceApi;
