import { Grid } from '@mui/material'
import React from 'react'
import useStyles from './styles'
import { useTheme } from '@mui/material/styles'
import Movie from '../movie/Movie'
const Movielist = ({movies}) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.moviesContainer}>
        {
            movies?.results.map((movie , i)=>(
                <Movie key={i} movie={movie} i={i}/>
            ))
        }
    </Grid>
  )
}

export default Movielist
