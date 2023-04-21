import { Box ,Stack , AppBar, Typography  , Link , styled , Button , Drawer , Menu , MenuItem} from '@mui/material';
import { makeStyles } from '@mui/styles'
import {React , useState} from 'react';
import Home from './Home';
import About from './About';
import SideBar from './SideBar';
import DiamondIcon from '@mui/icons-material/Diamond';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import {motion , } from 'framer-motion'




const Atag = styled(NavLink)(({theme})=>({
    marginLeft: '2.7em',
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.3rem',
    padding: '7px 7px',
    fontWeight: '600',
    fontFamily: '(Josefin Sans) sans-serif',
    cursor: 'pointer',
    "&.active": {
      color: 'red',
    },
    '&:hover':{
      color: 'purple',
      backgroundColor: 'lightgreen',
      borderRadius: '5px 20px 5px',
    },
    [theme.breakpoints.only('md')]: {
      display: 'absolute',
      fontSize: '1rem',
      marginLeft: '2rem',
      right:0,
    },
    [theme.breakpoints.only('sm')]: {
      // display :'none'
      marginLeft: '1.3rem',
      fontSize: '0.7rem',
    },
    [theme.breakpoints.only('xs')]: {
      display: 'block',
      textAlign:'center',
      fontSize: '0.7rem',
    },
}))

const useStyles = makeStyles({
  root: {
    "&.active": {
      color:'red',
    },
  },
});
  
export default function DrawerNavBar() {
  const classes = useStyles();

  return (
    <>
      <Stack p={1} right={0} display='inline'
        sx={{
                marginTop: {
                  lg:1,md:1,sm:1,xs:7
                },
                width :{
                  lg:'100%',md:'100%',sm:'100%',xs:'100%'
              },
              position: {
                  lg: 'fixed', md: 'fixed', sm: 'fixed', xs: 'fixed'
            },
                backgroundColor: {
                  lg:'transparent',md:'transparent',sm:'transparent',xs:'black',
                },
                alignText: 'right',
              }} align="right">
                      <Atag className={classes.root} to="">
                            Home
                      </Atag>
                      <Atag to="about">
                            About
                      </Atag>
                      <Atag to="key">
                            Keystone
                      </Atag>
                      {/* <Atag to="gallery">
                            Gallery
                      </Atag> */}
                      <Atag to="skills">
                            Skills
                      </Atag>
                      <Atag to="contact">
                            Contact
                      </Atag> 
            </Stack>
    </>
  );
}
