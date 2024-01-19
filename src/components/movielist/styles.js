import { makeStyles } from "@mui/styles";
const drawerWidth='240px'
export default makeStyles((theme)=>({
    moviesContainer:{
        display:'flex',
        flexwrap:'wrap',
        justifyContent:'space-between',
        overflow:'auto',
        [theme.breakpoints.down('sm')]:{
            justifyContent:'center'
        }
    }
}))