import React from 'react'
import { useState } from 'react'
import useStyles from './styles'
import {Box , Button , CircularProgress , Grid , Typography} from '@mui/material'
import {useNavigate , useParams} from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material'
import { useGetActorInfoQuery, useGetMoviesByActorIdQuery } from '../../services/apiCalls'
import { Link } from 'react-router-dom'
import Movielist  from '../movielist/Movielist'
import Pagination from '../pagination/Pagination'
const Actors = () => {
  const {id} = useParams()
  const classes = useStyles()
  const navigate = useNavigate()
  const [page,setPage] = useState(1)
  const {data , isFetching , error} = useGetActorInfoQuery(id)
  const {data : actorMovies} = useGetMoviesByActorIdQuery({id,page})
  if(isFetching){
    return(
      <Box display='flex' justifyContent='center' alignItems='center'><CircularProgress size='8rem'/></Box>
    )
  }

  if(error){
    return(
      <Box display='flex' justifyContent='center' alignItems='center'>
        <Link to='/' >Something went wrong, try later.</Link>
      </Box>
    )
  }
  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={5} xl={4}>
          <img className={classes.img} src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`} alt={data?.name} />
        </Grid>
        <Grid item lg={7} xl={8} styls={{display:'flex' , justifyContent:'center' , flexDirection:'column'}}>
          <Typography variant='h2' gutterBottom>{data?.name}</Typography>
          <Typography variant='h5' gutterBottom>Born : {new Date(data?.birthday).toDateString()}</Typography>
          <Typography variant='body2' align='justify' paragraph>{data?.biography || 'Sorry, no bio-data is available'}</Typography>
          <Box marginTop='2rem' display='flex' justifyContent='space-around' > 
            <Button variant='contained' color='primary' target='_blank' href={`https://www.imdb.com/name/${data?.imdb_id}`}>IDMB</Button>
            <Button startIcon={<ArrowBack/>} onClick={()=> navigate(-1)} color='primary'>Back</Button>
          </Box>
        </Grid>
      </Grid>
      <Box margin='2rem 0'>
        <Typography gutterBottom align='center' variant='h3'>Movies {data.name ? `of ${data?.name}` : ''}</Typography>
        {
          actorMovies ? <Movielist movies={actorMovies} number={12}/> : <Typography>Sorry No movies to display</Typography>
        }
        <Pagination currentPage={page} setPage={setPage} totalPages={data.total_pages} />
      </Box> 
    </>
  )
}

export default Actors
