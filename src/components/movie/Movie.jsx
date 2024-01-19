import React from 'react'
import { Typography , Grid , Grow , Tooltip , Rating } from '@mui/material'
import { Link } from 'react-router-dom'
import useStyles from './styles'
import { useTheme } from '@mui/material/styles'
const Movie = ({movie , i}) => {
  let src=''
  const classes = useStyles()
  movie.poster_path? (src=`https://image.tmdb.org/t/p/w500/${movie.poster_path}`) : (src='https://fillmurray.com/200/300')
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      <Grow in key={i} timeout={(i+1)*350}>
        <Link className={classes.links} to={`/movie/${movie?.id}`}>
          <img alt={movie.title} className={classes.poster} src={src}/>
          <Typography variant='h5' className={classes.title}>{movie?.title}</Typography>
          <Tooltip disableTouchListener title={`${movie?.vote_average}`} placement='right' arrow>
            <div>
              <Rating readOnly value={movie?.vote_average/2} precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  )
}

export default Movie
