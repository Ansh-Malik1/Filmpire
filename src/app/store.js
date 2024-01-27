import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../services/apiCalls";
import genreOrCategoryReducer from "../features/genreOrCategory";
import userReducer from "../features/auth";
export default configureStore({
    reducer:{
        [tmdbApi.reducerPath]: tmdbApi.reducer, 
        currentGenreOrCategory:genreOrCategoryReducer,
        user:userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware)
})