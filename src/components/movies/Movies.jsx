import React , {useState , useEffect}from 'react'
import {CircularProgress , Typography , useMediaQuery  , Box} from '@mui/material'
import {useSelector} from 'react-redux'
import { useGetMoviesQuery } from '../../services/apiCalls'
import Movielist from '../movielist/Movielist'

const Movies = () => {
  const {data , error , isFetching} = useGetMoviesQuery()
  if(isFetching){
    return(
      <Box display='flex' justifyContent='center'><CircularProgress size='4rem'/></Box>
    )
  }

  if(!data.results.length){
    return(
      <Box display='flex' mt='20px' alignItems='center'><Typography variant='h4'>No movies found</Typography></Box>
    )
  }

  if(error) return "Unknown error occured"

  if(!isFetching){
    return (
      <div>
        <Movielist movies={data}/>
      </div>
    )
  }
 
}

export default Movies
