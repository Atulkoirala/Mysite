import {React , styled} from 'react';
import {motion , } from 'framer-motion';
import { Box, Grid, Typography, Paper ,createStyles, Card ,Link , Button } from '@mui/material';
import phot from "../Media/images.png"
import '../Style/app.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FlagIcon from '@mui/icons-material/Flag';
import SideB from './SideBar'

// import Navbar from './Navbar'

// import { Image } from '@mui/icons-material';
// import img from "../Video/bgabout.jpg"


// const useStyles = makeStyles((theme) => ({
//   imag: {
//     borderRadius:'5.2rem 5.2rem 5.2rem 5.2rem',
//   }
// }))



export default function About() {
  // const classes = useStyles();
  return (
    <>
    {/* <Navbar/> */}
      <Box position='fixed' 
      
        component={motion.div}
        initial={{y: 500,scale:0,opacity:0.2}}
        animate={{y:0, scale:1,opacity:1}}
        transition={{duration:1.6}}
      
        width='100%' height='100vh'
        // component={motion.div}
        // initial={{x: -100,rotate:35,opacity:0.2}}
        // animate={{x:0, rotate:0,opacity:1}}
        // transition={{duration:1.6}}
        style={{
          background : 'radial-gradient(circle at center, #58a0c3 -60% , black 40% ,darkgreen 220%)',
          }}
      >
        <Grid container px={4} my={5} spacing={5}>
          <Grid item lg={4} md={4} sm={4} xs={12}
            sx={{
              height: {
                lg:'100%',md:'100%',sm:'100%',xs:'70%'
              },
              width: {
                lg:'95%',md:'95%',sm:'95%',xs:'65%'
              },
            }}>
            <Grid container>
              <Grid item lg={12} md={12} sm={12} xs={6}>
                <Box
                  component={motion.img}
                  whileHover={{ borderRadius : '5.2rem 5.2rem 5.2rem 5.2rem' }}
                  src={phot}
                  // className={classes.imag}
                  sx={{
                    borderRadius: '3.5rem 3.5rem 3.5rem 3.5rem',
                    width: {
                      lg:'75%',md:'95%',sm:'95%',xs:'100%'
                    },
                    // marginLeft: '0.7rem',
                    align: {
                      lg:'none',md:'none',sm:'none',xs:'left'
                    },
                    float: {
                      lg:'none',md:'none',sm:'none',xs:'left'
                    }
                  }}>
                </Box>
              </Grid>

              <Grid item lg={12} md={12} sm={12} xs={6}>
                <Box color='white' 
                  sx={{
                    width: {
                      lg:'100%',md:'100%',sm:'100%',xs:'100%'
                    },
                    textAlign: {
                      lg:'4.7rem',md:'4.7rem',sm:'0',xs:'center'
                    },
                    marginTop:{lg:'1rem',md:'1rem',sm:'1rem'},
                  }}>

                    
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: 'center',
                      }}>
                      <span style={{marginRight:"0.5rem",marginTop:'1rem'}}><LocationOnIcon/></span>
                      <span style={{marginTop:'1rem'}}>Kathmandu,Nepal</span>
                    </Typography>


                    
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: 'center',
                      }}>
                      <span style={{marginRight:"0.5rem",marginTop:'0.8rem'}}><CalendarMonthIcon /></span>
                      <span style={{marginTop:'0.8rem'}}>25th October 2000</span>
                    </Typography>


                  
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: 'center',
                      }}>
                      <span style={{marginRight:"0.5rem",marginTop:'0.8rem',marginDown:'0.5rem'}}><FlagIcon/></span>
                      <span style={{marginTop:'0.8rem',marginDown:'0.5rem'}}>Nepali</span>
                  </Typography>
                  

                  <Box
                        component={motion.div} 
                        variant="contained"
                        whileHover={{ scale: 1.17 }}
                        transition={{ type: "spring", stiffness: 350, damping: 10 }}
                        
                  ><Button variant="contained"
                        sx={{
                          backgroundColor:'green',  
                          padding:'0.5rem 1rem',
                          color: 'white',
                          margin: 'auto',
                          alignItem: 'center',
                          borderRadius:'14px 14px 14px 14px',
                          display:'flex',
                        }}
                  >Resume</Button></Box>
              </Box>
              </Grid>
            </Grid>
          </Grid>


          <Grid item lg={8} md={8} sm={8} height='100%'>
            <Paper sx={{backgroundColor:'transparent' , boxShadow:'none'}}>
              <Typography 
                component={motion.h1}
                  initial={{scale:0,}}
                  animate={{scale:1,}}
                  transition={{duration:1.6}}  
                sx={{
                  padding:{lg:'1.5rem'},
                  textAlign: 'justify',
                  fontSize: {
                    lg: 'calc(0.89vw + 0.9vh + 1.6vmin)', md: 'calc(0.95vw + 0.9vh + 1.55vmin)', sm: 'calc(0.85vw + 0.75vh + 1.55vmin)', xs: 'calc(0.52vw + 0.54vh + 1.35vmin)'
                  },
                  color: 'red',
                  flex:6,
                  justifyContent: 'space-evenly',
                  fontFamily: 'Hubballi, cursive',
                  fontFamily: 'Josefin Sans, sans-serif',
                  fontFamily: 'League Spartan, sans-serif',
                  fontFamily: 'Sansita Swashed, cursive',
              }}>
                  I am an enthusiastic, self-motivated, reliable,
                  responsible, and hard-working software engineer with
                  excellent time management skills. I am a good
                  communicator with proven interpersonal skills and am
                  used to working in a team whilst also being capable of
                  using my own initiative. I am skilled In dealing with
                  problems in a resourceful manner and negotiating to
                  achieve beneficial agreement. I am always enthusiastic to
                  learn and undertake new challenges. Till now I haven't
                  worked with many companies but I believe that every
                  count starts with zero so, hoping to get a better response
                  from your side.
              </Typography>
            </Paper>
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