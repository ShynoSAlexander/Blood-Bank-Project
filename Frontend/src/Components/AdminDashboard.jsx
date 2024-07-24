import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import axios from 'axios';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const DonorDashboard = () => {
  const [donors, setDonors] = useState([]);

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
  }, []);

  return (
    <div>
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
          <Button  href="/arl"
              sx={{ mx: 1, color: 'white',fontSize: '1.25rem', padding: '10px 20px','&:hover': {
                backgroundColor: 'lightcoral',  }}}>
            <Link to={'/arl'} style={{ textDecoration: "none", color: "white" }}>
              Add Donors
              </Link>
          </Button>
          <Button  href="/ud"
              sx={{ mx: 1, color: 'white',fontSize: '1.25rem', padding: '10px 20px','&:hover': {
                backgroundColor: 'lightcoral',  }}}>
            <Link to={'/ud'} style={{ textDecoration: "none", color: "white" }}>
              Update/Delete
              </Link>
          </Button>
            <Button
              href="/rl"
              sx={{ mx: 1, color: 'white',fontSize: '1.25rem', padding: '10px 20px','&:hover': {
                backgroundColor: 'lightcoral', // Change to the desired color on hover
    }}}
            ><Link to={'/rl'} style={{ textDecoration: "none", color: "white" }}>
              View Requests
              </Link>
            </Button>
            <Button
              href="/"
              sx={{ mx: 1, color: 'white',fontSize: '1.25rem', padding: '10px 20px','&:hover': {
                backgroundColor: 'lightcoral', // Change to the desired color on hover
    } }}
            ><Link to={'/'} style={{ textDecoration: "none", color: "white" }}>
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
      <br />
      <Typography  variant="h4"
  component="h2"
  sx={{
    textAlign: 'left',
    mb: 4,
    color: 'rgb(30, 144, 255)', // Indian Red color
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
    fontFamily: 'Lucida Handwriting', // Font family change
    fontSize:'50px',
    fontWeight:'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
  }}>
           &nbsp;Welcome Admin
          </Typography>
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <br />
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
      backgroundColor: '#FADADD',
      transform: 'scale(1.02)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
  }}
>
Admin Dashboard empowers administrators with tools to manage our blood bank effectively. Admins can view, delete, or update donor information, ensuring accuracy and relevance in our database. Adding new donors is simplified with a dedicated form, where essential details like name, age, email, phone number, blood type, and any pre-existing ailments can be entered seamlessly. Additionally, admins oversee all blood donation requests, with the ability to approve or reject requests promptly. Once a decision is made, users are promptly notified via the  email, ensuring transparency and efficiency in our processes. Admins can log out securely after their tasks are completed
          <br /><br /><br /></Typography>
          
   
      </Container>
    </div>
  );
}

export default DonorDashboard;