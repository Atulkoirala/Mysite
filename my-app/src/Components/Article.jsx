import React ,{useEffect , useState ,useRef } from 'react'
import { Tooltip,CardContent, Stack , CardActions , Box, Grid, Typography, styled, List ,ListItem ,createStyles, Card ,TextField,InputAdornment , Link , Button ,TextareaAutosize } from '@mui/material';
import '../Style/app.css'
import {motion , useScroll } from 'framer-motion'
import axios from 'axios'
import VanillaTilt from 'vanilla-tilt';





export default function Article() {

  const [post,setpost] = useState([]);
  const tiltRef = useRef(null);


  const getload = async()=>{
      const response = await axios.get('http://127.0.0.1:8000/media/edu');
      console.log(response.data);
      console.log(post);
      setpost(response.data);
      console.log(post);
  }

  useEffect(()=>{
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 10,
        speed: 250,
        glare: true,
        "max-glare": 0.5,
      });
    }
    getload();
},[])

  return (
    <>
        <Box 
          component={motion.div}
          initial={{ scale: 0 }}
          animate={{ scale: 1,transition:{duration: 1.1 }}}
          exit={{scale:0,transition:{duration: 1.1}}}
          whileHover={{boxShadow:'7px 12px 15px white'}}
          ref={tiltRef}
          p={2} sx={{borderRadius: '5rem 5rem 5rem 5rem',margin:'auto'}}
              style={{
                background: 'radial-gradient(circle, rgba(148,187,233,1) 6%, rgba(176,228,175,1) 23%, rgba(192,200,150,1) 56%, rgba(227,199,172,1) 83%, rgba(244,187,212,1) 95%)',
                height: '60vh',
                overflowY: 'auto',
                position: "fixed",
                margin: '0 auto',
                justifyContent: 'center',
                alignItems: 'center',
                width: '66%',
              }}>
                <Typography variant='h5' fontWeight='bold' my={2}
                    style={{
                    background: 'linear-gradient(to right bottom, black, red)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    }}

                    sx={{
                    fontSize: {
                    lg:'2rem',md:'1.7rem',sm:'1.4rem',xs:'1.1rem'
                    },
                    textAlign: 'center',
                    textDecoration:'underline',
                    fontFamily: 'Hubballi, cursive',
                    fontFamily: 'Josefin Sans, sans-serif',
                    fontFamily: 'League Spartan, sans-serif',
                    fontFamily: 'Sansita Swashed, cursive',
                    }}
                >Article</Typography>
                
                <Box>


                </Box>
        
        </Box>
    </>
  )
}
