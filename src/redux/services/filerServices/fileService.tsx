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
    getUserMappedQuestion: builder.query<any, { userId?: string | "" }>({
      query: ({ userId }) => {
        return {
          url: `file/getUserMappedQuestion/?userId=${userId}`,
        };
      },
    }),
    getQuestionById: builder.query<any, { questionId?: string | "" }>({
      query: ({ questionId }) => {
        return {
          url: `file/getQuestionById/?questionId=${questionId}`,
        };
      },
    }),
    fileUpload: builder.mutation<any, void>({
      query(body) {
        return {
          url: "file/upload",
          method: "POST",
          body,
        };
      },
    }),
    questionAssignedBy: builder.mutation<any, void>({
      query(body) {
        return {
          url: "file/questionAssignedBy",
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
    getUserQuestion: builder.query<any, void>({
      query: () => {
        return {
          url: "/file/getUserQuestion",
        };
      },
    }),
    createFolder: builder.mutation<any, void>({
      query(body) {
        return {
          url: "project/createFolder",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["folder"],
    }),

    saveProjectCode: builder.mutation<any, void>({
      query(body) {
        return {
          url: "project/saveProjectCode",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["folder"],
    }),
    getAllFolder: builder.query<any, void>({
      query: () => {
        return {
          url: "/project/getAllFolder",
        };
      },
      providesTags: ["folder"],
    }),
    getSaveChallengeCode: builder.query<any, void>({
      query: () => {
        return {
          url: "/challenge/getSaveChallengeCode",
        };
      },
    }),
    getSavedCode: builder.mutation<any, { projectId?: string }>({
      query: ({ projectId }) => {
        return {
          url: `/project/getSavedCode?projectId=${projectId}`,
          method: "GET",
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
  useGetUserQuestionQuery,
  useGetQuestionByIdQuery,
  useGetAllFolderQuery,
  useGetSavedCodeMutation,
  useCreateFolderMutation,
  useSaveProjectCodeMutation,
  useQuestionAssignedByMutation,
  useGetUserMappedQuestionQuery,
} = fileServiceApi;
