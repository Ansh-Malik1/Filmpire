import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const apiKey = '8d6defce2b5edec02db05ba014b04778'
const page=1
export const tmdbApi = createApi({
    reducerPath:'tmdbApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://api.themoviedb.org/3'}),
    endpoints:(builder)=>({
        getMovies:builder.query({
            query:()=>`movie/popular?page=${page}&api_key=${apiKey}`,

        }),
        getGenres:builder.query({
            query:()=>`genre/movie/list?api_key=${apiKey}`
        })
    })
})

export const{
    useGetMoviesQuery,
    useGetGenresQuery,
} = tmdbApi