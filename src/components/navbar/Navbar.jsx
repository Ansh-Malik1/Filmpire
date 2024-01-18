import React, { useState } from 'react'
import { AppBar , IconButton , Toolbar , Drawer , Button , Avatar , useMediaQuery } from '@mui/material'
import { Menu , AccountCircle , Brightness4 , Brightness7 } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import useStyles from './styles'
import { useTheme } from '@mui/material/styles'
const Navbar = () => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(max-width:600px')
  const theme = useTheme()
  const isLoggedIn = true
  // const [isMobile , setMobile] = useState()
  return (
    <>
    <AppBar position='fixed'>
      <Toolbar className={classes.toolbar}>
        {
          isMobile&&(
            <IconButton color='inherit' edge='start' style={{outline:'none'}} onClick={()=>{}} className={classes.menuButton}>
              <Menu />
            </IconButton>
          )
        }
        <IconButton color='inherit' sx={{ml:1}} onClick={()=>{}}>
        {
          theme.palette.mode === 'dark'? (<Brightness7/>) : (<Brightness4/>)
        }
        </IconButton>
        { !isMobile && 'Search...'}
        <div>
          {
            !isLoggedIn ? (<Button color='inherit'>Login &nbsp;</Button>):(<Button className={classes.profile} onClick={()=>{}} component={Link} to={`/profile/:id`} color='inherit'>{!isMobile && <>My Movies &nbsp;</>}
            <Avatar style={{width:30 , height:30}} alt='profile' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwZJAVSK3CPJ3a3_bhySSkhylBn1cQWKp9jw&usqp=CAU'}></Avatar>
            </Button>)
          }
        </div>
        {isMobile && 'Search...'}
      </Toolbar>
    </AppBar>
    </>
  )
}

export default Navbar
