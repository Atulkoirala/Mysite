import * as React from 'react';
import { Box, Grid, Typography, styled, List, ListItem, createStyles, Card, TextField, Link, Button, TextareaAutosize } from '@mui/material';
import {motion , } from 'framer-motion'
import '../Style/app.css'



export default function Education() {
  return (
    <>
      <Box 
          component={motion.div}
          initial={{scale:0}}
          animate={{scale:1}}
          transition={{duration:1.1}}
          p={2}
                sx={{
                  borderRadius: '5rem 5rem 5rem 5rem',
                }}
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
                Education
              </Typography>
                <Box ml={1} mr={1}>
                  <Typography variant='h5' fontWeight='bold'>B.Tech (CSE), Vellore Institute Of Technology</Typography>
                  <Typography variant='p'>Dec 2019 – present | Vellore, Tamil Nadu, India</Typography><br></br>
                  <Typography variant='p1'>Current 7.90 CGPA</Typography>
                </Box>
                <Box ml={1} mr={1}>
                  <Typography variant='h5' fontWeight='bold'>Intermediate Level Of Education (+2), Kathmandu Model College</Typography>
                  <Typography variant='p'>2018 | Kathmandu, Bagmati , Nepal</Typography><br></br>
                  <Typography variant='p1'>Passed with 2.78 GPA</Typography>
                </Box>
                <Box ml={1} mr={1}>
                  <Typography variant='h5' fontWeight='bold'>School Leaving Certificate, Scholar's Home Academy</Typography>
                  <Typography variant='p'>2016 | Kathmandu, Bagmati , Nepal</Typography><br></br>
                  <Typography variant='p1'>Passed with 3.5 GPA</Typography>
                </Box>
        </Box>
    </>
  );
}
