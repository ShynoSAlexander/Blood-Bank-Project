import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (<>
    <AppBar position="static" color='error'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
       
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <img src="\src\images\logo.png" alt="logo" style={{ height: 90, marginRight: -2 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Georgia',
                fontWeight: 1000,
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
                fontSize: '1.75rem', 
                padding: '10px 20px'
              }}
            >
              BLOOD BANK
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* Add your navigation links here if any */}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button   href="/"
            
              sx={{ mx: 1, color: 'white',fontSize: '1.25rem', padding: '10px 20px','&:hover': {
                backgroundColor: 'rgba(192, 192, 192, 0.4)',  }}}>
            <Link to={'/'} style={{ textDecoration: "none", color: "white" }}>
              Home
              </Link>
          </Button>
            <Button
              key="login"
              href="/l"
              sx={{ mx: 1, color: 'white',fontSize: '1.25rem', padding: '10px 20px','&:hover': {
                backgroundColor: 'rgba(192, 192, 192, 0.4)', // Change to the desired color on hover
    }}}
            ><Link to={'/l'} style={{ textDecoration: "none", color: "white" }}>
              Login
              </Link>
            </Button>
            <Button
              key="signup"
              href="/s"
              sx={{ mx: 1, color: 'white',fontSize: '1.25rem', padding: '10px 20px','&:hover': {
                backgroundColor: 'rgba(192, 192, 192, 0.4)', // Change to the desired color on hover
    } }}
            ><Link to={'/s'} style={{ textDecoration: "none", color: "white" }}>
              Signup
              </Link>

            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
</>
  );
};

export default Navbar;
