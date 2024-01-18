import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../services/apiCalls";
// import logger from 'redux-logger'
export default configureStore({
    reducer:{
        [tmdbApi.reducerPath]: tmdbApi.reducer, 
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware)
})