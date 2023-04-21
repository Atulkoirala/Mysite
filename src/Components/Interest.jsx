import * as React from 'react';
import { Box, Grid, Typography, styled, List, ListItem, createStyles, Card, TextField, Link, Button, TextareaAutosize } from '@mui/material';
import {motion , } from 'framer-motion'
import '../Style/app.css'



export default function Interest() {

  const interes = [
    { id : 1 , name : 'Cricket' },
    { id : 2 , name : 'Football' },
    { id : 3 , name : 'Learning languages' },
    { id : 4 , name : 'Art' },
    { id : 5 , name : 'Photography' },
    { id : 6 , name : 'Dancing' },
    { id : 7 , name : 'Travel' },
    { id : 8 , name : 'Listening to music' },
    { id : 9 , name : 'Playing Games' },
    { id : 10 , name : 'Swimming' },
  ]


  return (
    <>
      <Box 
          component={motion.div}
          initial={{y: 500}}
          animate={{y:0}}
          transition={{duration:1.1}}
        p={2} sx={{borderRadius: '5rem 5rem 5rem 5rem',margin:'auto'}}
              style={{
                background: 'radial-gradient(circle, rgba(148,187,233,1) 6%, rgba(176,228,175,1) 23%, rgba(192,200,150,1) 56%, rgba(227,199,172,1) 83%, rgba(244,187,212,1) 95%)',
              }}
      >
                      <Typography variant='h5' fontWeight='bold' mb={2}
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
              >
                Interest
              </Typography>
                {
                  interes.map((user) => (
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
