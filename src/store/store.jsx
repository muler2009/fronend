import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { apiSlice } from "../api/apiSlice";
import authReducer from "../features/auth/myAuthSlice";
import moduleSliceReducer from "../features/module/moduleSlice";

const store = configureStore({
  reducer: {
    // [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    moduleslice: moduleSliceReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([apiSlice.middleware]),
});

setupListeners(store.dispatch);

export default store;
