import React, { useState } from 'react'
import { AppBar , IconButton , Toolbar , Drawer , Button , Avatar , useMediaQuery } from '@mui/material'
import { Menu , AccountCircle , Brightness4 , Brightness7 } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import useStyles from './styles'
import { useTheme } from '@mui/material/styles'
import Sidebar from '../sidebar/Sidebar'
import SearchBar from '../search/Search'
const Navbar = () => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(max-width:600px')
  const theme = useTheme()
  const isLoggedIn = true
  const [toggled , setToggled] = useState(false)
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
            !isLoggedIn ? (<Button color='inherit'>Login &nbsp;</Button>):(<Button className={classes.profile} onClick={()=>{}} component={Link} to={`/profile/:id`} color='inherit'>{!isMobile && <>My Movies &nbsp;</>}
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
