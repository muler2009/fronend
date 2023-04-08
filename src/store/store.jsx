import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import apiSlice  from '../api/apiSlice'
import authReducer from '../features/auth/authSlice';
import moduleSliceReducer from '../features/module/moduleSlice'


const store = configureStore({
    reducer: {        
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        moduleslice: moduleSliceReducer,
    },
    
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([apiSlice.middleware]),



})


setupListeners(store.dispatch)

export default store;


