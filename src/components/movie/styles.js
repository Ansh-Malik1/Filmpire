import { makeStyles } from "@mui/styles";
export default makeStyles((theme)=>({
    movie:{
        padding:"10px"
    },
    title:{
        color:theme.palette.text.primary,
        textOverflow: 'ellipsis',
        width:'180px',
        overflow:'hidden',
        marginTop:'10px',
        textAlign:'center',
        whiteSpace:'nowrap',
        margin:'auto !important',
        [theme.breakpoints.down('sm')]:{
            width:'250px'
        }
    },
    poster:{
        borderRadius:'20px',
        height:'260px',
        marginBottom:'10px',
        transition:'ease-in 100ms',
        '&:hover':{
            transform:'scale(1.025)'
        },
        [theme.breakpoints.down('sm')]:{
            height:'300px'
        }
    },
    links:{
        alignItems:'center',
        fontWeight:'bolder',
        [theme.breakpoints.up('xs')]:{
            display:'flex',
            flexDirection:'column'
        },
        textDecoration:'none',
        '&:hover':{
            cursor:'pointer',
            
        }
    }
}))