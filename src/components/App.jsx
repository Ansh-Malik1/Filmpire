import React , {useRef} from 'react'
import { CssBaseline } from '@mui/material'
import { Route , Routes } from 'react-router-dom'
import Actors from './actors/Actors'
import Navbar from './navbar/Navbar'
import MovieInformation from './movieInformation/MovieInformation'
import Movies from './movies/Movies'
import useStyles from './styles'
import Profile from './profile/Profile'
import useAlan from './Alan'
const App = () => {
    const classes = useStyles()
    const alanBtnContainer= useRef()
    useAlan()
  return (
    <div className={classes.root}>
        <CssBaseline />
        <Navbar/>
            <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Routes>
                    <Route exact path='/movie/:id' element={<MovieInformation/>}></Route>
                    <Route exact path='/actors/:id' element={<Actors/>}></Route>
                    <Route exact path='/profile/:id' element={<Profile/>}></Route>
                    <Route path='/' element={<Movies/>}></Route>
                    <Route path='/approved' element={<Movies/>}></Route>
                </Routes> 
            </main>
            <div ref={alanBtnContainer}/>
    </div>
  )
}

export default App
