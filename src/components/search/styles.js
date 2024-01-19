import { makeStyles } from "@mui/styles";
export default makeStyles((theme)=>({
    searchCont:{
        [theme.breakpoints.down('sm')]:{
            width:'100%',
            display:'flex',
            justifyContent:'center'
        }
    },
    input:{
        [theme.breakpoints.down('sm')]:{
            marginTop:'-10px',
            marginBottom:'10px'
        },
        color: theme.palette.mode==='light' && 'black',
        filter:  theme.palette.mode==='light' && 'invert(1)'
    },
}))