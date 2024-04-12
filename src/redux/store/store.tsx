import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../services/authServices/authService";
// import { usersApi } from "../services/userServices/userService";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    // [usersApi.reducerPath]: usersApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
setupListeners(store.dispatch);
