import React,{useState} from 'react'
import useStyles from './styles';
import { InputAdornment, TextField  } from '@mui/material';
import {Search as SearchIcon} from '@mui/icons-material'
import { useDispatch } from 'react-redux';
import { searchMovie } from '../../features/genreOrCategory';
const SearchBar = () => {
  function handlePress(event){
    if(event.key==='Enter'){
        dispatch(searchMovie(query))
    }
  }
  const dispatch = useDispatch()
  const classes = useStyles();
  const [query , setQuery] = useState('')
  return (
    <div className={classes.searchCont}>
      <TextField 
      onKeyDown={handlePress} 
      variant='standard' 
      InputProps={{className:classes.input,startAdornment:(<InputAdornment position='start'><SearchIcon/></InputAdornment>)}} 
      value={query} 
      onChange={(e)=> setQuery(e.target.value)} />
    </div>
  )
}

export default SearchBar
 