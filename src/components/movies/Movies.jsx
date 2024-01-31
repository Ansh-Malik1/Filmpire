import React , {useState , useEffect}from 'react'
import {CircularProgress , Typography , useMediaQuery  , Box} from '@mui/material'
import {useSelector} from 'react-redux'
import { useGetMoviesQuery } from '../../services/apiCalls'
import Movielist from '../movielist/Movielist'
import { useNavigate } from 'react-router-dom'
import Pagination from '../pagination/Pagination'
const Movies = () => {
  const navigate = useNavigate()
  const [page,setPage] = useState(1)
  const {genreOrCategoryName , searchQuery} = useSelector((state)=>state.currentGenreOrCategory)
  const {data , error , isFetching} = useGetMoviesQuery({genreOrCategoryName,page , searchQuery})
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
        <Pagination currentPage={page} setPage={setPage} totalPages={data.total_pages} />
      </div>
    )
  }
 
}

export default Movies
