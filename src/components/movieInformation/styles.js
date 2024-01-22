import { makeStyles } from "@mui/styles";

export default makeStyles((theme)=>({
    container:{
        display:'flex',
        justifyContent:'space-around',
        margin:'10px 0 !important',
        [theme.breakpoints.down('sm')]:{
            flexDirection:'column',
            flexWrap:'wrap'
        }
    },
    poster:{
        borderRadius:'20px',
        boxShadow:'1rem 1rem 1rem rgb(64,64,70)',
        width:'80%',
        [theme.breakpoints.down('md')]:{
            margin:'0 auto',
            width:'50%',
            height:'350px',
        },
        [theme.breakpoints.down('sm')]:{
            margin:'0 auto',
            width:'100%',
            height:'350px',
            marginBottom:'30px'
        },
    },
    headCont:{
        display:'flex',
        
    },
    genreContainer:{
        margin:'10px 0 !important',
        display:'flex',
        justifyContent:'space-around',
        textWrap:'wrap '
    },
    genreImg:{
        filter: theme.palette.mode==='dark' && 'invert(1)' 
    },
    links:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        [theme.breakpoints.down('sm')]:{
            padding:'0.5rem 1rem'
        }
    },
    castImg:{
        width:'100%',
        maxWidth:'7em',
        height:'8em',
        objectFit:'cover',
        borderRadius:'12px'
    },
    buttonContainer:{
        display:'flex',
        justifyContent:'space-between',
        width:'100%',
        [theme.breakpoints.down('sm')]:{
            flexDirection:'column'
        }
    },
    modal:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    video:{
        height:'50%',
        width:'50%',
        [theme.breakpoints.down('sm')]:{
            height:'50%',
            width:'90%'
        }
    }
}))