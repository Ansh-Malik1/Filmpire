import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const apiKey = '8d6defce2b5edec02db05ba014b04778'

export const tmdbApi = createApi({
    reducerPath:'tmdbApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://api.themoviedb.org/3'}),
    endpoints:(builder)=>({
        getMovies:builder.query({
           query:({genreOrCategoryName , page , searchQuery})=>{
            if(searchQuery){
                return `/search/movie?query=${searchQuery}&page=${page}&api_key=${apiKey}`
            }
            if(genreOrCategoryName && typeof genreOrCategoryName==='string'){
                return `movie/${genreOrCategoryName}?page=${page}&api_key=${apiKey}`
            }
            if (genreOrCategoryName && typeof genreOrCategoryName === "number"){
                return `discover/movie?with_genres=${genreOrCategoryName}&page=${page}&api_key=${apiKey}`
            }
            return `movie/popular?page=${page}&api_key=${apiKey}`
           },

        }),
        getGenres:builder.query({
            query:()=>`genre/movie/list?api_key=${apiKey}`
        }),
        getMovie:builder.query({
             query:(id)=> `/movie/${id}?append_to_response=videos,credits&api_key=${apiKey}`           
             
        }),
        getRecommendations:builder.query({
            query:({movie_id ,list}) => `/movie/${movie_id}/${list}?api_key=${apiKey}`
        }),
        getActorInfo:builder.query({
            query:(id)=> `person/${id}?api_key=${apiKey}`
        }),
        getMoviesByActorId:builder.query({
            query:({id , page})=> `/discover/movie?with_cast=${id}&page=${page}&api_key=${apiKey}`
        }),
        getList: builder.query({
            query: ({ listName, accountId, sessionId, page }) => `/account/${accountId}/${listName}?api_key=${apiKey}&session_id=${sessionId}&page=${page}`,
          }),
    })
})

export const{
    useGetMoviesQuery,
    useGetGenresQuery,
    useGetMovieQuery,
    useGetRecommendationsQuery,
    useGetActorInfoQuery,
    useGetMoviesByActorIdQuery,
    useGetListQuery
} = tmdbApi