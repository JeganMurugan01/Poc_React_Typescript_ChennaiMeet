/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASEURL } from "../../../constants";

export const fileServiceApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASEURL}/api/v1/`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("ACCESSTOKEN");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
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
