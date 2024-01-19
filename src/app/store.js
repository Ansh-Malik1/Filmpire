import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../services/apiCalls";
import genreOrCategoryReducer from "../features/genreOrCategory";
import genreOrCategory from "../features/genreOrCategory";
export default configureStore({
    reducer:{
        [tmdbApi.reducerPath]: tmdbApi.reducer, 
        currentGenreOrCategory:genreOrCategoryReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware)
})