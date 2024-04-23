/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const skillsServiceApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BASE_URL}/api/v1/skills`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("ACCESSTOKEN");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
        headers.set("ngrok-skip-browser-warning", "true");
      }
      return headers;
    },
  }),
  reducerPath: "skillsServiceApi",
  tagTypes: [],
  endpoints: (builder) => ({
    getSkillsList: builder.query<any, void>({
      query: () => {
        return {
          url: "/list",
        };
      },
    }),
    getSkillsLanguage: builder.query<any, void>({
      query: () => {
        return {
          url: "/language",
        };
      },
    }),
  }),
});
export const { useGetSkillsListQuery, useGetSkillsLanguageQuery } =
  skillsServiceApi;
