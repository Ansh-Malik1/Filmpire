import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const apiKey = '8d6defce2b5edec02db05ba014b04778'

export const tmdbApi = createApi({
    reducerPath:'tmdbApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://api.themoviedb.org/3'}),
    endpoints:(builder)=>({
        getMovies:builder.query({
           query:({genreOrCategoryName , page , searchQuery})=>{
            if(genreOrCategoryName && typeof genreOrCategoryName==='string'){
                return `movie/${genreOrCategoryName}?page=${page}&api_key=${apiKey}`
            }
            if (genreOrCategoryName && typeof genreOrCategoryName === "number"){
                return `discover/movie?with_genres=${genreOrCategoryName}&page=${page}&api_key=${apiKey}`
            }
            if(searchQuery){
                return `/search/movie?query=${searchQuery}&page=${page}&api_key=${apiKey}`
            }
            return `movie/popular?page=${page}&api_key=${apiKey}`
           },

        }),
        getGenres:builder.query({
            query:()=>`genre/movie/list?api_key=${apiKey}`
        }),
        getMovie:builder.query({
             query:(id)=> `/movie/${id}?append_to_response=videos,credits&api_key=${apiKey}`           
             
        })
    })
})

export const{
    useGetMoviesQuery,
    useGetGenresQuery,
    useGetMovieQuery,
} = tmdbApi