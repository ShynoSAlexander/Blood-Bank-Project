import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import axios from 'axios';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const DonorDashboard = () => {
  const [donors, setDonors] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await axios.get('http://localhost:3001/donors');
        setDonors(response.data);
      } catch (error) {
        console.error('Error fetching donors:', error);
      }
    };

    fetchDonors();

    // Retrieve the name from localStorage
    const userName = localStorage.getItem('name');
    setName(userName);
  }, []);

  return (
    <div>
      <AppBar position="static" color='error'>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
              <img src="/src/images/logo.png" alt="logo" style={{ height: 90, marginRight: -2 }} />
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
              <Button variant="contained" href="/dl" sx={{
             
              ':hover': { backgroundColor: 'lightcoral' },
              color: 'white',
              padding: '5px 15px',
              fontSize: '0.9rem',
            }}>
                <Link to={'/dl'} style={{ textDecoration: "none", color: "white" }}>
                  List Donors
                </Link>
              </Button>&nbsp;&nbsp;&nbsp;
              <Button variant="contained" href="/r" sx={{
             
             ':hover': { backgroundColor: 'lightcoral' },
             color: 'white',
             padding: '5px 15px',
             fontSize: '0.9rem',}}>
                <Link to={'/r'} style={{ textDecoration: "none", color: "white" }}>
                  Request Form
                </Link>
              </Button>&nbsp;&nbsp;&nbsp;
              <Button variant="contained" href="/" sx={{
             
             ':hover': { backgroundColor: 'lightcoral' },
             color: 'white',
             padding: '5px 15px',
             fontSize: '0.9rem',}}>
                <Link to={'/'} style={{ textDecoration: "none", color: "white" }}>
                  Logout
                </Link>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <video autoPlay loop muted style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1,
      }}>
        <source
          src="/src/images/videoplaybackk.mp4"
          type="video/mp4"
        />
      </video>

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
       <br /><br /><br />
        <Typography
          variant="body1"
          component="p"
          sx={{
            color: '#333',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            mb: 5,
            padding: '40px',
            borderRadius: '20px',
            fontWeight: 500,
            lineHeight: 2,
            fontFamily: 'Verdana',
            width: '100%',
            height: 'auto',  // Adjust height as needed, auto will fit content
            margin: '0 auto', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            '&:hover': {
              backgroundColor: '#f9f9f9',
              transform: 'scale(1.02)',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            },
          }}
        > <Typography
        variant="h4"
        component="h2"
        sx={{
          textAlign: 'left',
          mb: 4,
          color: 'rgb(30, 144, 255)', // Indian Red color
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
          fontFamily: 'Lucida Handwriting', // Font family change
          fontSize:'50px',
          fontWeight:'bold',
        }}
      >
        Hello {name},
      </Typography>
          Welcome to the Donor Dashboard, where you can find a comprehensive list of available blood donors, complete with their details such as name, blood group, email, and phone number. For your convenience, a request form is easily accessible via the navbar. This form allows you to submit your donation or request for blood, specifying details such as name, age, email, phone number, blood type, and whether you are donating or receiving. You can also indicate any pre-existing ailments and the number of blood units required if you are a receiver. After submission, you'll receive timely notifications via mail id provided in request form regarding the status of your request.
        </Typography>
      </Container>
    </div>
  );
}

export default DonorDashboard;
