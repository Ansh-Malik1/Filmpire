import React,{useState} from 'react'
import useStyles from './styles';
import { InputAdornment, TextField  } from '@mui/material';
import {Search as SearchIcon} from '@mui/icons-material'
import { useDispatch } from 'react-redux';
import { searchMovie } from '../../features/genreOrCategory';
import { useLocation, useNavigate } from 'react-router-dom';
const SearchBar = () => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      dispatch(searchMovie(query));
    }
  };
  const dispatch = useDispatch()
  const classes = useStyles();
  const [query , setQuery] = useState('')
  const location = useLocation()
  if(location.pathname!='/'){
    return null
  }
  return (
    <div className={classes.searchCont}>
      <TextField 
      onKeyDown={handleKeyPress} 
      variant='standard' 
      InputProps={{className:classes.input,startAdornment:(<InputAdornment position='start'><SearchIcon/></InputAdornment>)}} 
      value={query} 
      onChange={(e)=> setQuery(e.target.value)} />
    </div>
  )
  
}

export default SearchBar
 