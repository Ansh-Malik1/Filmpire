import React , {useEffect} from 'react'
import { Divider , List , ListItem , ListItemText , ListSubheader , Box , CircularProgress , ListItemIcon } from '@mui/material'
import { Link } from 'react-router-dom'
import useStyles from './styles'
import { useTheme } from '@mui/material/styles'
const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';
const cat = [
    {label:'Popular', value:'popular'},
    {label:'Top Rated', value:'top_rated'},
    {label:'Upcoming', value:'upcoming'}
]
const democat =[
    {label:'Horror', value:'horror'},
    {label:'Animation', value:'animation'},
    {label:'Comedy', value:'comedy'}
]

const Sidebar = ({setToggled}) => {
    const classes = useStyles()
    const theme = useTheme()
    return (
        <>
        <Link to="/" className={classes.logoMain}>
            <img className={classes.imageLink} src={
                theme.palette.mode==="dark" ? (blueLogo) : (redLogo)
            }/>
        </Link>
        <Divider/>
        <List>
            <ListSubheader>
                Categories
            </ListSubheader>
            {
                cat.map((category)=>(
                    <Link key={category.value} className={classes.link} to='/'>
                        <ListItem onClick={()=>{}}>
                            {/* <ListItemIcon>
                                
                            </ListItemIcon> */}
                            <ListItemText primary={category.label}/>
                        </ListItem>
                    </Link>
                ))
            }
            <Divider/>
            <ListSubheader>
                Genres
            </ListSubheader>
            {
                democat.map((category)=>(
                    <Link key={category.value} className={classes.link} to='/'>
                        <ListItem onClick={()=>{}}>
                            {/* <ListItemIcon>
                                
                            </ListItemIcon> */}
                            <ListItemText primary={category.label}/>
                        </ListItem>
                    </Link>
                ))
            }
        </List>
        </>
    )
}

export default Sidebar
