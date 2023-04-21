import  { React , useState } from 'react';
import { Box,Typography ,List ,ListItem ,styled ,TextField , Button, Stack} from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import GithubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import phot from "../Media/images.png"
import {AnimatePresence, motion , } from 'framer-motion';
import NavD from './NavBarDrawer'
import menulogo  from '../Media/menulogo.gif'
import photos from "../Media/LOGO1.png"
import '../Style/style.css'





export default function SideBar() {
  const [open, setopen] = useState([]);

  const [state, setState] = useState("false");

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


    
  const list = (anchor) => (
    <>
    <AnimatePresence>

      <Box 
        component={motion.div} key="modal"
        
        initial={{x: "-100%",opacity:0.2}}
        animate={{x: 0,opacity:1,transition:{duration:0.7}}}
        exit={{x:"-100%",transition:{duration:1.3}}}

        sx={{
          border: '0.1px black solid',
          height: '100vh',
          width:{
            xl:'20%',lg:'20%',md:'25%',sm:'35%',xs:'40%'
          },
          position :'fixed',
          overflow:'hidden',
          zIndex:'999'
        }} bgcolor="black"
        >
          
        <Stack direction='column' overflow='hidden' width='fit-content' justifyContent='center' alignItems='center' sx={{marginTop:'4rem'}} >
              
              {/* Logo with NavBar */}

              <Box
                component={motion.img}
                  // whileHover={{ borderRadius : '5.2rem 5.2rem 5.2rem 5.2rem' }}
                  src={photos} 
                  sx={{
                    borderRadius: '3.5rem 3.5rem 3.5rem 3.5rem',
                    width: '100%',
                    justifyContent:'center',
                     margin:'auto',
                     zIndex:'99999',
                  }}>
                </Box>

                <Box sx={{
                  marginRight:{
                      lg:'6.2rem',md:'6rem',sm:'6rem',xs:'5rem'
                  },
                  marginTop:{
                      lg:'0.1rem',md:'0.2rem',sm:'0.1rem',xs:'none'
                }}}>
                  <NavD/>
                </Box>
                
              
        {/* Icons */}

        <Box 
          component={motion.div}
          initial={{x:-130}}
          animate={{x:0}}
          transition={{duration:1.5}}
          position="fixed"
          bottom={0}
          sx={{
          display:{
            xl:'flex', lg: 'flex', md: 'flex', sm: 'flex', xs: 'grid'
          },
          marginX:"auto",
          justifyContent:'center',
          overflow:'hidden',
        }}
          width="fit-content"
          direction="column"
          p={2}
          textAlign="center" my={5}>

            {/* group of Icons */}

            <List       
            direction="column">

                <Box mx='auto' sx={{display:{xl:'flex',lg:'flex',md:'flex',sm:'flex',xs:'block'}}}>

                  <Link target="_blank" rel="noopener noreferrer" to='https://www.facebook.com/' sx={{cursor:"pointer"}}>
                    <Li
                    component={motion.div}
                    whileHover={{rotate:360}}
                    transition={{duration:0.5}}
                    sx={{height:'fit-content'}}
                    >
                      <FacebookOutlinedIcon sx={{ fontSize:  {
                        lg: '2.1rem', md: '2rem', sm: '1.9rem', xs: '1.7rem'
                    },
                      color: 'blue'
                    }}></FacebookOutlinedIcon>
                    </Li>
                  </Link>

                  <Link target="_blank" rel="noopener noreferrer" to='https://www.gmail.com/' sx={{cursor:"pointer"}}>
                    <Li
                      component={motion.div}
                      whileHover={{rotate:360}}
                      transition={{duration:0.5}}
                    sx={{height:'fit-content'}}

                    >
                      <MailOutlineIcon sx={{ fontSize: {
                        lg: '2.1rem', md: '2rem', sm: '1.9rem', xs: '1.7rem'
                    },
                      color: 'gray'
                    }}></MailOutlineIcon>
                    </Li>
                  </Link>

                  <Link target="_blank" rel="noopener noreferrer" to='https://www.linkedin.com/' sx={{cursor:"pointer"}}>
                    <Li
                      component={motion.div}
                      whileHover={{rotate:360}}
                      transition={{duration:0.5}}
                    sx={{height:'fit-content'}}

                  >
                      <LinkedInIcon sx={{ fontSize:   {
                        lg: '2.1rem', md: '2rem', sm: '1.9rem', xs: '1.7rem'
                    },
                      color: 'blue'
                    }}></LinkedInIcon>
                    </Li>
                  </Link>
                  
                </Box>

                <Box mx='auto' sx={{display:{xl:'flex',lg:'flex',md:'flex',sm:'flex',xs:'block'}}}>

                  <Link target="_blank" rel="noopener noreferrer" to='https://www.youtube.com/' sx={{cursor:"pointer"}}>
                    <Li
                        component={motion.div}
                        whileHover={{rotate:-360}}
                        transition={{duration:0.5}}
                    sx={{height:'fit-content'}}

                    >
                      <YouTubeIcon sx={{ fontSize:   {
                        lg: '2.1rem', md: '2rem', sm: '1.9rem', xs: '1.7rem'
                    },
                      color: 'red'
                    }}></YouTubeIcon>
                    </Li>
                  </Link>

                  <Link target="_blank" rel="noopener noreferrer" to='https://www.github.com/' sx={{cursor:"pointer"}}>
                    <Li
                      component={motion.div}
                      whileHover={{rotate:-360}}
                      transition={{duration:0.5}}
                    sx={{height:'fit-content'}}

                    >
                      <GithubIcon sx={{ fontSize:  {
                        lg: '2.1rem', md: '2rem', sm: '1.9rem', xs: '1.7rem'
                    },
                      color: 'gray'
                    }}></GithubIcon>
                    </Li>
                  </Link>

                  <Link target="_blank" rel="noopener noreferrer" to='https://www.instagram.com/' sx={{cursor:"pointer"}}>
                    <Li
                      component={motion.div}
                      whileHover={{rotate:-360}}
                      transition={{duration:0.5}}
                    sx={{height:'fit-content'}}

                    >
                      <InstagramIcon sx={{ fontSize:  {
                        lg: '2.1rem', md: '2rem', sm: '1.9rem', xs: '1.7rem'
                    },
                      color: 'red'
                    }}></InstagramIcon>
                    </Li>
                  </Link>              
              </Box>
                
          </List>
          </Box>           

            {/* CopyRights */}

          <Typography
            position="fixed"
            bottom={0}
            component="p"
            color="red"
            sx={{
              marginX: 'auto',
              justifyContent:'center',
              alignItems:'center',
              fontWeight:'bold',
              marginTop: '3.7rem',
            }}
          >
            Portfolio &copy; 2023
          </Typography>

          </Stack>
        </Box>

        </AnimatePresence>
    </>
  );

  const Li = styled(ListItem)({
    borderRadius: '15px 12px 12px 15px',
    backgroundColor: 'white',
    width: 'fit-content',
    padding: '1px 1.1px',
    marginTop:'0.3rem',
    marginLeft: '0.7rem',
    float: 'right',
    display:'inline-block',
    '&: hover':{
      backgroundColor: 'black',
    }
  })

  // const [open1, setopen1] = useState("false");
  // const [open2, setopen2] = useState("false");
  // const [open3, setopen3] = useState("false");
  // const [open4, setopen4] = useState("false");

  return (
    <div>
      {['left'].map((anchor) => (

        <Box key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>

              <Box>
                <Box component='img' sx={{borderRadius: '50%',width:{lg: '7rem', md: '5rem', sm: '5rem', xs: '5rem'}}} src={menulogo} className='imagee'>
                </Box>    
              </Box>

            {/* </MenuIcon> */}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </Box>

      ))}
    </div>
  );
}
