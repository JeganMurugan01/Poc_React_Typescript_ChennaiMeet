import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../services/authServices/authService";
import { userApi } from "../services/userServices/userService";
import { fileServiceApi } from "../services/filerServices/fileService";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [fileServiceApi.reducerPath]: fileServiceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userApi.middleware,
      fileServiceApi?.middleware
    ),
});
setupListeners(store.dispatch);
