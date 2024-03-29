import { makeStyles } from "@mui/styles";

export default makeStyles((theme)=>({
    logoMain:{
        display:'flex',
        justifyContent:"center",
        padding:'10% 0'
    },
    imageLink:{
        width:'70%',
    },
    links:{
        color:theme.palette.text.primary,
        textDecoration:'none'
    },
    genreImg:{
        filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'dark',
    }

}))