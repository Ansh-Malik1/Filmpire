import React from 'react'
import { Modal , Typography , Button , Grid , Box , CircularProgress , Rating , useMediaQuery, ButtonGroup } from '@mui/material'
import {Movie as MovieIcon , Theaters , Language , PlusOne , Favorite , FavoriteBorderOutlined , Remove , ArrowBack} from '@mui/icons-material'
import { Link , useNavigate, useParams } from 'react-router-dom'
import { UseDispatch , useSelector } from 'react-redux'
import axios from 'axios'
import useStyles from './styles'
import { useGetMovieQuery } from '../../services/apiCalls'
import genreIcons from '../../assets/genres';
const MovieInformation = () => {
  const navigate = useNavigate()
  const classes = useStyles();
  const {id} = useParams()
  const {data , isFetching , error} = useGetMovieQuery(id)
  const isMovieFavourited = false
  const isMovieWatchlisted = false
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
    <Grid container className={classes.container}>
      <Grid item sm={12} lg={4}> 
        <img className={classes.poster} src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`} alt={data?.title}/>
      </Grid>
      <Grid lg={7} item container direction='column' className={classes.headCont}>
          <Typography variant='h3' align='center' gutterBottom >{data?.title} ({data?.release_date.split('-')[0]})</Typography>
          <Typography variant='h5' align='center' gutterBottom >{data?.tagline} </Typography>
          <Grid item className={classes.container}>
            <Box display='flex' align='center'>
              <Rating readOnly value={data?.vote_average/2}/>
              <Typography variant='subtitle1' gutterBottom style={{marginLeft:'10px'}}>
                {data?.vote_average}/10
              </Typography>
            </Box> 
            <Typography gutterBottom variant='h6' align='center'>
              {data?.runtime} min
              {
                (data?.spoken_languages).length>0 ? ` | ${data?.spoken_languages[0].name}` : ''
              }
            </Typography>
          </Grid>
          <Grid item className={classes.genreContainer}>
            {
              data?.genres?.map((genre , i)=>(
                <Link style={{textDecoration:'none'}} onClick={()=>{}} to='/' className={classes.links} key={genre?.name}>
                  <img src={genreIcons[genre.name.toLowerCase()]} className={classes.genreImg} height={30} />
                  <Typography style={{textDecoration:'none'}} variant='subtitle1' color='textPrimary'>{genre?.name}</Typography>
                </Link>
              )) 
            }
          </Grid>
          <Typography variant='h5' style={{marginTop:'0.8rem'}}>Overview</Typography>
          <Typography style={{marginBottom:'2rem'}}>{data?.overview}</Typography>
          <Typography variant='h5' gutterBottom>Casting</Typography>
          <Grid item container spacing={2}>
            {
              data && data?.credits?.cast.map((cast , i)=>(
                cast.profile_path && 
                (<Grid key={i} xs={4} item md={2} component={Link} to={`/actors/${cast?.id}`} style={{textDecoration:'none'}}>
                  <img className={classes.castImg} src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`} alt={cast?.name}/>
                  <Typography color="textPrimary" variant='subtitle1'>{cast?.name}</Typography>
                  <Typography color="textSecondary" variant='subtitle1'>{cast?.character}</Typography>
                </Grid>)
              )).slice(0,6)
            }
          </Grid>
          <Grid item container style={{marginTop:'2rem'}}>
            <div className={classes.buttonContainer}>
              <Grid item xs={12} sm={6} className={classes.buttonContainer}>
                <ButtonGroup size='small' variant='outlined'>
                  <Button target='_blank' rel='noopener noreferrer' href={data?.homepage} endIcon={<Language/>}>Website</Button>
                  <Button target='_blank' rel='noopener noreferrer' href={`https://www.imdb.com/title/${data?.imdb_id}`} endIcon={<MovieIcon/>}>IMDB</Button>
                  <Button onClick={()=>{}} target='_blank' rel='noopener noreferrer' href='#' endIcon={<Theaters/>}>Trailer</Button>
                </ButtonGroup>
              </Grid>
              <Grid item xs={12} sm={6} className={classes.buttonContainer}>
                <ButtonGroup size='small' variant='outlined'>
                  <Button onClick={()=>{}} 
                  endIcon={isMovieFavourited ? (<FavoriteBorderOutlined/>) : (<Favorite/> )}
                  >{isMovieFavourited ? 'Unfavorite' : 'Favorite'}</Button>
                  <Button onClick={()=>{}} 
                  endIcon={isMovieWatchlisted ? (<Remove/>) : (<PlusOne/> )}
                  >{isMovieWatchlisted ? 'Remove' : 'Watchlist'}</Button>
                  <Button endIcon={<ArrowBack/>} sx={{borderColor:'primary.main'}}>
                    <Typography color='inherit' style={{textDecoration:'none'}} variant='subtitle2' component={Link} to={navigate(-1)}>Back</Typography>
                  </Button>
                </ButtonGroup>
              </Grid>
            </div>
          </Grid>
        </Grid>  
    </Grid>
  )
}

export default MovieInformation
