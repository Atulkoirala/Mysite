import  { React , useState } from 'react';
import { Box, Typography ,List ,Link, ListItem ,styled ,TextField , Button, Stack} from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';



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
      <Box sx={{
        border: '0.1px black solid',
        height: '100vh',
        // overflow:'hidden',
      }} bgcolor="black" overflow='hidden'>
          
        <Stack>
          <Box>
            <Typography color='white' variant='h5' mx={10}>
            Projects
          </Typography>
                <List mx={0} p={1}>
          <ListItem my={0}>
                    <Lis href='#'>A simple Chat Application</Lis>
          </ListItem>
          <ListItem my={0}>
                    <Lis href='#'>Telephone Diary</Lis>
          </ListItem>
          <ListItem my={0}>
                    <Lis href='#'>Image Site</Lis>
          </ListItem>
          <ListItem my={0}>
                    <Lis href='#'>Func Box</Lis>
          </ListItem>
          <ListItem my={0}>
                    <Lis href='#'>BookStore Management System</Lis>
          </ListItem>
          <ListItem my={0}>
                    <Lis href='#'>Youtube Clone</Lis>
          </ListItem>
            </List>
          </Box>

          
        <Box sx={{borderRadius:'10px 10px 10px 10px'}} p={0.4}>
          <Tfield id="outline" label="Email" size="small" variant="standard" required/>
          <Btn variant="outlined" color="success">
            Submit
          </Btn>
        </Box>
          

        <Box>
        <Typography color='white' variant='h5' mx={10}>
          Contact Me
        </Typography>
          <List>
            <Li>
                <FacebookOutlinedIcon sx={{ fontSize: '2.1rem', color: 'blue' }}></FacebookOutlinedIcon>
                <Txt>FaceBook</Txt>
              </Li>
              <Li>
                <InstagramIcon sx={{ fontSize: '2.1rem', color: 'red' }}></InstagramIcon>
                <Txt>Instagram</Txt>
              </Li>
              <Li>
                <MailOutlineIcon sx={{ fontSize: '2.1rem', color: 'gray' }}></MailOutlineIcon>
                <Txt>Gmail</Txt>
              </Li>
              <Li>
                <YouTubeIcon sx={{ fontSize: '2.1rem', color: 'red' }}></YouTubeIcon>
                <Txt>YouTube</Txt>
            </Li>
            <Li>
                <LinkedInIcon sx={{ fontSize: '2.1rem', color: 'blue' }}></LinkedInIcon>
                <Txt>LinkedIn</Txt>
              </Li>
          </List>    
          </Box>
          <Box>
            <Typography variant='p' mt={0} color='white' mx={5}>
              Portfolio &copy; 2012 - 2022
            </Typography>
          </Box>
        </Stack>
        </Box>
    </>
  );





  // const [open1, setopen1] = useState("false");
  // const [open2, setopen2] = useState("false");
  // const [open3, setopen3] = useState("false");
  // const [open4, setopen4] = useState("false");


  const Lis = styled(Link)({
    marginTop: '0',
    fontSize: '11px',
    textDecoration: 'none',
    color:'white',
  })

  const Btn = styled(Button)({
    marginTop: '1rem',
    marginLeft: '4px',
    padding:'2px 2px',
    width:'10%',
  })

  const Tfield = styled(TextField)({
    width: '75%',
    height: '20%',
    fontFamily: 'nunito',
    input: { color: 'green' },

    "& label": {
      color: "white"
    },
    "& label.Mui-focused": {
      color: "Skyblue"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "red"
    },
    // "&:hover label": {
    //   fontWeight: 700
    // },
    // "& .MuiOutlinedInput-root": {
    //   color: "white",
    //   "& fieldset": {
    //     borderColor: "green"
    //   },
    //   "&:hover fieldset": {
    //     borderColor: "green",
    //     borderWidth: 1
    //   },
    //   "&.Mui-focused fieldset": {
    //     borderColor: "green"
    //   }
    // }
  })

  const Li = styled(ListItem)({
    borderRadius: '15px 12px 12px 15px',
    backgroundColor: 'white',
    width: '90%',
    padding: '1px 1.1px',
    marginTop:'0.3rem',
    marginLeft:'0.7rem',
  })

  const Txt = styled(Typography)({
    backgroundColor: 'white',
    borderRadius: '10px 10px 10px 10px',
    padding: '5px 35px',
    fontSize: '0.9rem',
    fontWeight : 'bold',
    width: '100%',
    marginLeft:'1.5rem',
  })

  return (
    <div>
      {['left'].map((anchor) => (
        <Box key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon p={0} sx={{
            fontSize: {
              lg:'2.2rem',md:'2rem',sm:'1.8rem',xs:'1.6rem'
              },
              padding: { lg: '0px 0px', md: '0px 0px', sm: '0px 0px', xs: '0px 0px' },
            color: 'lightgreen'
            }}></MenuIcon>
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
