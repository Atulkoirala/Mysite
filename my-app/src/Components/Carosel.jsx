import React ,{useEffect , useState ,useRef } from 'react'
import { Box, Grid,CardContent ,CardActionArea,CardMedia, Typography, styled, List, ListItem, createStyles, Card, TextField, Link, Button, TextareaAutosize } from '@mui/material';
import {motion , useScroll,AnimatePresence } from 'framer-motion'
import '../Style/app.css'
import axios from 'axios'
import CancelIcon from '@mui/icons-material/Cancel';



export default function Carosel({handleClose}) {


  const [post,setpost] = useState([]);

  const getload = async()=>{
      const response = await axios.get('http://127.0.0.1:8000/media/carosel');
      console.log(response.data);
      console.log(post);
      setpost(response.data);
      console.log(post);
  }

  useEffect(()=>{
      getload();
  },[])




  const dropIn ={
    hidden:{
        y:"100vh",
        opacity:0,
    },
    visible:{
        y:"0",
        opacity:1,
        transition:{
            duration:1.5,
            type:"spring",
            damping:35,
            stiffness:100,
        },
    },
    exit:{
        y:"-100vh",
        opacity:0,
        transition:{
            duration:1.5,
            type:"spring",
            damping:35,
            stiffness:100,
        },
    },
};


  return (
    <>
      <AnimatePresence mode='wait'>
            <Box
                component={motion.div}
                my={3}
                sx={{height:'50%',zIndex:'1',border:'0.1px solid black'}}
                className="mods"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e)=> e.stopPropagation()}
            >
                <Button size="small" onClick={handleClose} sx={{color:'black',border:'1px solid black',fontWeight:'bolder',backgroundColor:'crimson',borderRadius:'17px 17px 17px 17px',padding:'5px 5px',zIndex:'1'}}>
                        <CancelIcon />
                </Button>
              {
                post.map((elem)=>{
                  return(
                    <Box>
                      <Box
                        component='img'
                        width="100%"
                        height="100%"
                        sx={{position:'absolute',top:0,opacity:'0.9',left:0,objectFit: 'cover'

                      }}
                        src={elem.Image}
                        >
                      </Box>
                      <Typography 
                        sx={{
                            color:'white',
                            margin:'auto',
                            left:'0',
                            background:'rgba(179, 62, 62, 0.8)',
                            width:'100%',
                            position:'absolute',
                            bottom:'15%',
                            fontWeight:'bold',
                            fontFamily: 'Roboto Slab, serif',
                            fontSize:{
                              xl:'3.5rem',lg: '2.7rem', md: '2.2rem', sm: '1.7rem', xs: '1.4rem'
                            },
                        }}>
                        {elem.Title}
                      </Typography>
                    </Box>

                  )
                })
              }
            </Box>
      </AnimatePresence>    
    </>
  )
}
