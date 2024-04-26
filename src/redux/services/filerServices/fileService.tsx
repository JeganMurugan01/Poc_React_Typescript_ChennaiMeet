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
    getAllFiles: builder.query<
      any,
      { page: number; limit: number; language?: string | "" }
    >({
      query: ({ page, limit, language }) => {
        return {
          url: `file/getAllFiles/?page=${page}&limit=${limit}&language=${
            language?.length ? language : ""
          }`,
        };
      },
    }),
    fileUpload: builder.mutation<any, void>({
      query(body) {
        console.log(body);
        
        return {
          url: "file/upload",
          method: "POST",
          body,
        };
      },
    }),
    getAllLanguages: builder.query<any, void>({
      query: () => {
        return {
          url: "skills/language",
        };
      },
    }),

    getFileMetaData: builder.query<any, void>({
      query: () => {
        return {
          url: `file/getMetaData`,
        };
      },
    }),
  }),
});
export const {
  useGetAllFilesQuery,
  useGetFileMetaDataQuery,
  useGetAllLanguagesQuery,
  useFileUploadMutation,
} = fileServiceApi;
