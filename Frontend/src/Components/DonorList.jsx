import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button, Box,AppBar,Toolbar } from '@mui/material';
import '../css/Donorlist.css'; // Adjusted import path
import { Link } from 'react-router-dom';

const DonorList = () => {
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
    <><AppBar position="static" color='error'>
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
          <img src="/src/images/logo.png" alt="logo" style={{ height: 90, marginRight: -2 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/d"
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

    <div style={{ backgroundColor: 'indianred', minHeight: '100vh', padding: '16px', position: 'relative' }}>
      <Box
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '32px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          maxWidth: 'lg',
          margin: 'auto',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textAlign: 'left',
              mb: 4,
              color: 'darkred', // Indian Red color
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              fontFamily: 'Lucida Handwriting', // Font family change
              fontSize:'50px',
              fontWeight:'bold',
            }}
          >
            &nbsp;&nbsp;Blood&nbsp;Donors&nbsp;Available
          </Typography>
          <br />
          <br />
          <Grid container spacing={3}>
            {donors.map((donor) => (
              <Grid item xs={12} sm={6} md={4} key={donor._id} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Card
                  sx={{
                    border: '2px solid #b30000',
                    borderRadius: '8px',
                    backgroundColor: '#fff',
                    width: '300px',
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ fontWeight: 'bold', color: '#b30000', marginBottom: 1 }}
                    >
                      {donor.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                      <strong>Email:</strong> <span style={{ color: '#3f51b5' }}>{donor.email}</span>
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                      <strong>Phone:</strong> <span style={{ color: '#3f51b5' }}>{donor.phoneNumber}</span>
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                      <strong>Blood Type:</strong> <span style={{ color: '#3f51b5' }}>{donor.bloodType}</span>
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                      <strong>Ailments:</strong> <span style={{ color: '#3f51b5' }}>{donor.predefinedAilments}</span>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href={`tel:${donor.phoneNumber}`}>
                      Contact
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Container>
      </Box>
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>
    </div>
    </>
  );
};

export default DonorList;
