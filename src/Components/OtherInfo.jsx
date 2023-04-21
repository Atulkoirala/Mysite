import * as React from 'react';
import { Box, Grid, Typography, styled, List ,ListItem ,createStyles, Card ,TextField, Link , Button ,TextareaAutosize } from '@mui/material';
import {motion , } from 'framer-motion'
import '../Style/app.css'



export default function OtherInfo() {

  const lang = [
    { id : 1 , name : 'Nepali' },
    { id : 2 , name : 'English' },
    { id : 3 , name : 'Hindi' },
    { id : 4 , name : 'French' },
  ]

  return (
    <>
      <Box 
          component={motion.div}
          initial={{x: 500}}
          animate={{x:0}}
          transition={{duration:1.1}}
        p={2} sx={{borderRadius: '5rem 5rem 5rem 5rem',margin:'auto'}}
                style={{
                  background: 'radial-gradient(circle, rgba(148,187,233,1) 6%, rgba(176,228,175,1) 23%, rgba(192,200,150,1) 56%, rgba(227,199,172,1) 83%, rgba(244,187,212,1) 95%)',
                }}
              >
                <Typography variant='h5' fontWeight='bold'
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
                >Work Experience</Typography>

                <Box my={1} mr={1}>
                  <Typography variant='h5' fontWeight='bold'>Census 2021, Census Taker</Typography>
                  <Typography variant='p'>Oct 2021 – Nov 2021 | Kavreplanchowk, Nepal</Typography>
                </Box>

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
                >Language</Typography>
                  {
                    lang.map((user) => (
                      <Box sx={{
                        display: 'inline-block',
                        color: 'white',
                      }}
                      >
                        <Typography p={1} sx={{
                          fontSize: {
                            lg:'1.1rem',md:'1rem',sm:'0.9rem',xs:'0.7rem'
                          },
                          marginRight: '1.3rem',
                          marginLeft: '1.3rem',
                          marginBottom: '1.7rem',
                          backgroundColor: 'black',
                          width: 'fit-content',
                          borderRadius: '3rem 3rem 3rem 3rem',
                        }}
                          key={user.id}>{user.name}</Typography>
                      </Box>
                  ))  
        }
      </Box>
    </>
  );
}
