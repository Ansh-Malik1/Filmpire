import React , {useState , useEffect}from 'react'
import {Box , CircularProgress , Typography , useMediaQuery} from '@mui/icons-material'
import {useSelector} from 'react-redux'
import { useGetMoviesQuery } from '../../services/apiCalls'
const Movies = () => {
  const {data} = useGetMoviesQuery()
  console.log(data)
  return (
    <div>
      MOVIES
    </div>
  )
}

export default Movies
