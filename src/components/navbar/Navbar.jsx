import React, { useEffect, useState } from 'react'
import { AppBar , IconButton , Toolbar , Drawer , Button , Avatar , useMediaQuery } from '@mui/material'
import { Menu , AccountCircle , Brightness4 , Brightness7 } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import useStyles from './styles'
import { useTheme } from '@mui/material/styles'
import Sidebar from '../sidebar/Sidebar'
import SearchBar from '../search/Search'
import { createSessionId, fetchtoken, moviesApi } from '../../utils'
import {useDispatch , useSelector} from 'react-redux'
import {setUser , userSelector} from '../../features/auth'
const Navbar = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const isMobile = useMediaQuery('(max-width:600px')
  const theme = useTheme()
  const [toggled , setToggled] = useState(false)
  const token = localStorage.getItem('request_token')
  const sessionIdLocalStorage = localStorage.getItem('session_id')
  const {isLoggedIn , user} = useSelector((state)=>state.user)
  useEffect(()=>{
    const logInUser = async()=>{
      if(token){
        if(sessionIdLocalStorage){
          const {data:userData} = await moviesApi.get(`/account?session_id=${sessionIdLocalStorage}`)
          dispatch(setUser (userData))
        }
        else{
          const sessionId = await createSessionId()
          const {data:userData} = await moviesApi.get(`/account?session_id=${sessionId}`)
          dispatch(setUser (userData))
        }
      }
    }
    logInUser()
  },[token])
  return (
    <>
    <AppBar position='fixed'>
      <Toolbar className={classes.toolbar}>
        {
          isMobile&&(
            <IconButton color='inherit' edge='start' style={{outline:'none'}} onClick={()=>setToggled((prevState)=> !prevState)} className={classes.menuButton}>
              <Menu />
            </IconButton>
          )
        }
        <IconButton color='inherit' sx={{ml:1}} onClick={()=>{}}>
        {
          theme.palette.mode === 'dark'? (<Brightness7/>) : (<Brightness4/>)
        }
        </IconButton>
        { !isMobile && <SearchBar/>}
        <div>
          {
            !isLoggedIn ? (<Button color='inherit' onClick={fetchtoken}>Login &nbsp;</Button>):(<Button className={classes.profile} component={Link} to={`/profile/${user.id}`} color='inherit'>{!isMobile && <>My Movies &nbsp;</>}
            <Avatar style={{width:30 , height:30}} alt='profile' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwZJAVSK3CPJ3a3_bhySSkhylBn1cQWKp9jw&usqp=CAU'}></Avatar>
            </Button>)
          }
        </div>
        {isMobile && <SearchBar/>}
      </Toolbar>
    </AppBar>
    <div>
      <nav className={classes.drawer}> 
      {
        isMobile ? (
        <Drawer onClose={()=>setToggled((prevState)=> !prevState)} variant="temporary" anchor='right' open={toggled}  classes={{paper:classes.drawerPaper}} ModalProps={{keepMounted:true}}>
          <Sidebar setToggled={setToggled}></Sidebar>
        </Drawer>) : 
        (
          <Drawer classes={{paper:classes.drawerPaper}} variant='permanent' open>
            <Sidebar setToggled={setToggled}></Sidebar>
          </Drawer>
        )
      }
      </nav>
    </div>
    </>
  )
}

export default Navbar
