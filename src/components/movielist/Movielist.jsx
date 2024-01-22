import { Grid } from '@mui/material'
import React from 'react'
import useStyles from './styles'
import { useTheme } from '@mui/material/styles'
import Movie from '../movie/Movie'
const Movielist = ({movies , number}) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.moviesContainer}>
        {
            movies?.results.map((movie , i)=>(
                <Movie key={i} movie={movie} i={i}/>
            )).slice(0,number)
        }
    </Grid>
  )
}

export default Movielist
