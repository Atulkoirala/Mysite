import { useRef ,React}  from 'react';
import { Box ,Typography, styled , Button, Link} from '@mui/material';
import phot from "../Media/bg.jpg"
import '../Style/app.css'
import Move from './pointermove'
import Typical from 'react-typical'
import MenuIcon from '@mui/icons-material/Menu';
import SideB from './SideBar'
import {motion} from 'framer-motion'


export default function Home() {
  let x,y;
  const inputRef = useRef(null);
  
  const handleMouseMove = (event) => {

    x = event.clientX;
    y = event.clientY;
    console.log("Cursor position:",x,y);
  };


  return (
    <>
    <Box position='fixed'
          component={motion.div}
          initial={{y: -500,scale:0,opacity:0.2}}
          animate={{y:0, scale:1,opacity:1}}
          transition={{duration:1.6}}
          width='100%' sx={{ backgroundColor: 'black'}}>
        <Box>

            <div>
              <Box component={motion.img}
              // initial={{
              //   scale:0,
              // }}
              // animate={{
              //   scale:1,
              // }}
              // transition={{duration:1.3}}
              className="himage" src={phot}></Box>
              <div className="grad"></div>
            </div>
            <Move/>
        </Box>
        <Box position='absolute' left={1} bottom={70}>
          <motion.h1
            initial={{x:'-100vw'}}
            animate={{x:40,rotateZ:360}}
            transition={{
              delay: 1.3, type: 'spring', duration:1.5
            }}
            style={{
            // background: 'linear-gradient(to right bottom, #00FF00,#D70040)',
            background: 'White',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: 'Source Sans Pro'
          }}
          >Hello I am </motion.h1>
          <Typography color='white' variant='h1' component={motion.h1}
            initial={{opacity:0}}
            animate={{opacity:1,x:100}}
            transition={{delay:0.8,duration:3}}
            style={{
              // background: 'linear-gradient(to right bottom,#8F00FF, #FF0000)',
              background: 'White',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor:'transparent'
            }}
            sx={{
              fontSize: '1.7rem',              
              fontFamily: 'Courier New, Courier, monospace',
              fontWeight: 'bolder',
            }}
          >
            <Typical
              loop={Infinity}
              wrapper="span"
              steps={[
                'Hacker', 4000,
                'Entrepreneur', 4000,
                'Programmer', 4000,
                'Web Developer', 4000
              ]}
            />
          </Typography>
        </Box>
        <Box left={15} position='absolute' bottom={15} component={motion.div}
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{
            delay: 1.3,duration:2.5
          }}
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
