import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Typography } from '@mui/material';
import {motion , } from 'framer-motion'



export default function TemporaryDrawer() {

  return (
    <>
      <Typography
        animate={{ x: 100, y: 100, fontSize:666,color:'red'}}
        component={motion.h1}
        style={{
          // background: 'white',
          width: '100%',
          height:'100vh',
            // 'clamp(150px, 50%, 900px)',
          color:'white'
      }}>Hello World</Typography>


        <motion.h1
        animate={{ x: 100, y: 100, fontSize:666,color:'red'}}
        // conponent={motion.h1}
        style={{
          // background: 'white',
          width: '100%',
          height:'100vh',
            // 'clamp(150px, 50%, 900px)',
          color:'white'
      }}>Hello World</motion.h1>
    </>
  );
}
