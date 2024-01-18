import { makeStyles } from "@mui/styles";

export default makeStyles((theme)=>({
    toolbar:{
        height:'80px',
        display:'flex',
        marginLeft:'240px',
        justifyContent:'space-between',
        [theme.breakpoints.down('sm')]:{
            marginLeft:'0',
            flexWrap:'Wrap'
        }
    },
    menuButton:{
        marginRight:theme.spacing(2),
        [theme.breakpoints.up('sm')]:{
            display:'none',
        }
    }
    
}))