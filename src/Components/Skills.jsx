import {React , useState} from 'react';
import { Box, Grid, Drawer , Typography, styled, List ,ListItem ,createStyles, Card ,TextField, Link , Button ,TextareaAutosize } from '@mui/material';
import Course from './Courses'
import Skill from './Skill'
import Interest from './Interest'
import Edu from './Education'
import Other from './OtherInfo'
// import {Offcanvas } from 'react-bootstrap';
import SideB from './SideBar'
import ski  from '../Media/images.png'
import '../Style/app.css'
import {motion , } from 'framer-motion'
import '../Style/app.css'




export default function Skills() {


  const [opener1, setopener1] = useState(false);
  const [opener2, setopener2] = useState(false);
  const [opener3, setopener3] = useState(false);
  const [opener4, setopener4] = useState(false);
  const [opener5, setopener5] = useState(false);


  const handle1 = () => {
    setopener1(!opener1);

    if ((opener2) || (opener3) || (opener4) || (opener5)){
      setopener2(false);
      setopener3(false);
      setopener4(false);
      setopener5(false);
    }
  }

  const handle2 = () => {
    setopener2(!opener2);
    console.log(opener1);

    if ((opener1) || (opener3) || (opener4) || (opener5)){
      setopener1(false);
      setopener3(false);
      setopener4(false);
      setopener5(false);
    }
  }

  const handle3 = () => {
    setopener3(!opener3);

    if ((opener1) || (opener2) || (opener4) || (opener5)){
      setopener1(false);
      setopener2(false);
      setopener4(false);
      setopener5(false);
    } 
  }

  const handle4 = () => {
    setopener4(!opener4);

    if ((opener1) || (opener2) || (opener3) || (opener5)){
      setopener1(false);
      setopener2(false);
      setopener3(false);
      setopener5(false);
    } 
  }

  const handle5 = () => {
    setopener5(!opener5);

    if ((opener1) || (opener2) || (opener3) || (opener4)){
      setopener1(false);
      setopener2(false);
      setopener3(false);
      setopener4(false);
    }
  }

  const Bx = styled(Box)(({theme})=>({
    display: 'grid',
    width: 'fit-content',
    [theme.breakpoints.down('md')]:{
      display: 'block',
      width: '100%',
      marginLeft:'0.3rem',
      textAlign: 'center',
    }
  }))

  const Btn = styled(Button)(({ theme }) => ({
    [theme.breakpoints.only('sm')]: {
      marginRight: '7%',
    },
    [theme.breakpoints.only('xs')]: {
      marginRight: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      width:'75%',
      marginLeft: '5rem',
      marginBottom: '2rem',
    }
  }))


  return (

    <>
      <Box position='fixed'
        component={motion.div}
        initial={{x: -750,scale:0,opacity:0.2}}
        animate={{x:0, scale:1,opacity:1}}
        transition={{duration:1.6}}
        height='100vh' width='100%'
        style={{      
            background: 'radial-gradient(circle at center, #905ee6 -110% , black 45% ,orange 240%)',
        }}>
        <Grid container mt={7} spacing={3}>

          <Typography color="white" width='100%'
            style={{
              background: 'linear-gradient(to right bottom, green, orange)',
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
            }}
          >My Information</Typography>

          <Grid item lg={2} md={2} sm={12} xs={12}>
            <Bx>
              <Btn component={motion.div} whileHover={{ scale: 1.2 }} whileTap={{ opacity:0 }} color='success' size='small' sx={{ fontSize: { lg: '1rem', md: '0.8rem', sm: '0.7rem', xs: '0.7rem' } }} onClick={handle1} variant="contained">Courses</Btn>
              <Btn component={motion.div} whileHover={{ scale: 1.2 }} whileTap={{ opacity:0 }} color='success' size='small' sx={{fontSize:{lg:'1rem',md:'0.8rem',sm:'0.7rem',xs:'0.7rem'}}} onClick={handle2} variant="contained">Skills</Btn>
              <Btn component={motion.div} whileHover={{ scale: 1.2 }} whileTap={{ opacity:0 }} color='success' size='small' sx={{fontSize:{lg:'1rem',md:'0.8rem',sm:'0.7rem',xs:'0.7rem'}}} onClick={handle3} variant="contained">Education</Btn>
              <Btn component={motion.div} whileHover={{ scale: 1.2 }} whileTap={{ opacity:0 }} color='success' size='small' sx={{fontSize:{lg:'1rem',md:'0.8rem',sm:'0.7rem',xs:'0.7rem'}}} onClick={handle4} variant="contained">Interest</Btn>
              <Btn component={motion.div} whileHover={{ scale: 1.2 }} whileTap={{ opacity:0 }} color='success' size='small' sx={{fontSize:{lg:'1rem',md:'0.8rem',sm:'0.7rem',xs:'0.7rem'}}} onClick={handle5} variant="contained">OtherInfo</Btn>
            </Bx>
          </Grid>
          <Grid item sx={{
            textAlign: 'center',
            marginLeft: {
              lg:'9rem',md:'7rem',sm:'2rem',xs:'2rem' 
            },
            marginRight: {
              sm:'2rem',xs:'2rem'
            }
          }} lg={7} md={7} sm={12} xs={12}>
            <Box>
              {
                opener1 ? (
                  <Box>
                    <Course/>
                  </Box>
                  )
                  :opener2? (
                    <Box>
                      <Skill />
                    </Box>
                  )
                  :opener3? (
                    <Box>
                      <Edu/>
                    </Box>
                  )
                  :opener4? (
                    <Box>
                      <Interest/>     
                    </Box>
                  )
                  :opener5? (
                    <Box>
                      <Other/>
                    </Box>
                  )
                  : (
                    <Box>
                        <Box component='img' src={ski} className='imag1'>
                            
                        </Box>    
                    </Box>
                  )
              }              
            </Box>
          </Grid>
        </Grid>
        <Box left={15} position='absolute' bottom={3}
          sx={{
          borderRadius: '15px 15px 15px 15px',
          padding: { lg: '0px 0px', md: '0px 0px', sm: '0px 0px', xs: '0px 0px' }
        }}
          style={{
            background:'linear-gradient(to right bottom, #e89654,#D70040)'
          }}
        >
          <Link>
            <SideB/>
          </Link>
        </Box>
      </Box>
    </>
  );
}
