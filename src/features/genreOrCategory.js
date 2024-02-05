import { createSlice } from "@reduxjs/toolkit";

export const genreOrCategory = createSlice({
    name:"genreOrCategory",
    initialState:{
        genreOrCategoryName:'',
        page:1,
        searchQuery:''
    },
    reducers:{
        selectGenreOrCategory:(state,action)=>{
            state.searchQuery= ''
            state.genreOrCategoryName = action.payload
            
        },
        searchMovie:(state , action)=>{
            state.searchQuery = action.payload
        }
    }
})

export const {selectGenreOrCategory , searchMovie} = genreOrCategory.actions

export default genreOrCategory.reducer