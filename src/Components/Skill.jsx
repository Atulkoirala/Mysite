import * as React from 'react';
import { Box, Grid, Typography, styled, List, ListItem, createStyles, Card, TextField, Link, Button, TextareaAutosize } from '@mui/material';
import {motion , } from 'framer-motion'
import '../Style/app.css'



export default function Skill() {

  const skil = [
    { id : 1 , name : 'Leadership' },
    { id : 2 , name : 'Ability to Work in Team' },
    { id : 3 , name : 'Communication' },
    { id : 4 , name : 'PHP' },
    { id : 5 , name : 'SQL' },
    { id : 6 , name : 'MYSQL' },
    { id : 7 , name : 'HTML & CSS' },
    { id : 8 , name : 'Django' },
    { id : 9 , name : 'React' },
    { id : 10 , name : 'C & C++' },
    { id : 11 , name : 'Java' },
    { id : 12 , name : 'Python' },
    { id : 13 , name : 'Microsoft Office' },
    { id : 13 , name : 'Figma' },
  ]

  return (
    <>
      <Box
          component={motion.div}
          initial={{x:-500}}
          animate={{x:0}}
          transition={{duration:1.1}} 
        p={2} sx={{borderRadius: '5rem 5rem 5rem 5rem'}}
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
                Skills
              </Typography>
                {
                  skil.map((user) => (
                    <Box sx={{
                      display: 'inline-block',
                      color: 'white',
                    }}
                    >
                      <Typography p={1} sx={{
                        marginRight: '1.3rem',
                        marginLeft: '1.3rem',
                        marginBottom: '1.2rem',
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
