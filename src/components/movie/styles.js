import { makeStyles } from "@mui/styles";
const drawerWidth='240px'
export default makeStyles((theme)=>({
    movie:{
        padding:"10px"
    },
    title:{
        color:theme.palette.text.primary,
        textOverflow:'ellipsis',
        width:'230px',
        overflow:'hidden',
        marginTop:'10px',
        marginBottom:0,
        textAlign:'center',
        margin:'auto !important'
    },
}))