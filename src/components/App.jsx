import React from 'react'
import { CssBaseline } from '@mui/material'
import { Route , Routes } from 'react-router-dom'
import Actors from './actors/Actors'
import Navbar from './navbar/Navbar'
import MovieInformation from './movieInformation/MovieInformation'
import Movies from './movies/Movies'
import useStyles from './styles'
const App = () => {
    const classes = useStyles()
  return (
    <div className={classes.root}>
        <CssBaseline />
        <Navbar/>
            <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Routes>
                    <Route exact path='/' element={<Movies/>}>HOME</Route>
                    <Route exact path='/movie/:id' element={<MovieInformation/>}></Route>
                    <Route exact path='/actors/:id' element={<Actors/>}></Route>
                    <Route exact path='/profile/:id' element={<div>Profile</div>}></Route>
                </Routes> 
            </main>
    </div>
  )
}

export default App
