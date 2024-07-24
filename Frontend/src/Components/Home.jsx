import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Button, Container, Grid, Paper, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div sx={{
      backgroundColor: 'lightblue',
      padding: '20px',
      borderRadius: '8px',
      textAlign: 'center',
    }}>
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="src/images/videoplayback.mp4" type="video/mp4" />
      </video>

      <Container sx={{ position: 'relative', zIndex: 1, color: 'white', pt: 10 }}>
        <Box sx={{ textAlign: 'center', mb: 6, background: 'rgba(255, 255, 255, 0.8)', padding: '10px', borderRadius: '10px' }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontFamily: 'Lucida Handwriting',
              fontWeight: 1000,
              letterSpacing: '.3rem',
              textAlign: 'center',
              mb: 4,
              color:'red',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            }}
          >
            "Life in <br />
            Every Drop"
          </Typography>

          <Typography variant="h6" component="p" sx={{ mb: 2, color: 'black' }}>
            Welcome to our Blood Bank. We are dedicated to providing safe and sufficient blood supply to those in need. 
          </Typography>
          <Typography variant="h6" component="p" sx={{ mb: 2, color: 'black'}}>
            Join us in saving lives, one drop at a time.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
          <Paper elevation={4} sx={{ p: 3, backgroundColor: 'rgba(255, 255, 255, 1)' , transition: 'transform 0.1s, box-shadow 0.1s', '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 1)',
      transform: 'scale(1.02)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },}}>
              <Typography variant="h5" component="h2" sx={{ color: 'lightblue', mb: 2 ,fontWeight:'bold'}}>
                Why Donate Blood?
              </Typography>
              <Typography variant="body1" component="p">
                Blood donation is a simple act of kindness that can save multiple lives. It improves your overall health by stimulating blood cell production.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={4} sx={{ p: 3, backgroundColor: 'rgba(255, 255, 255, 1)' , transition: 'transform 0.1s, box-shadow 0.1s', '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 1)',
      transform: 'scale(1.02)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },}}>
              <Typography variant="h5" component="h2" sx={{ color: 'lightcoral', mb: 2,fontWeight:'bold' }}>
                Benefits
              </Typography>
              <Typography variant="body1" component="p">
                Donating blood can help reduce harmful iron stores, lower cancer risk, improve cardiovascular health, and even provide a sense of well-being.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
          <Paper elevation={4} sx={{ p: 3, backgroundColor: 'rgba(255, 255, 255, 1)' , transition: 'transform 0.1s, box-shadow 0.1s', '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 1)',
      transform: 'scale(1.02)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },}}>
              <Typography variant="h5" component="h2" sx={{ color: 'lightblue', mb: 2,fontWeight:'bold' }}>
                Get Involved
              </Typography>
              <Typography variant="body1" component="p">
                Whether you are a first-time donor or a regular contributor, your participation is crucial. Sign up today and make a difference.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Box
          className="background-section"
          
        >
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: 'blue',
              ':hover': { backgroundColor: 'lightcoral' },
              color: 'white',
              padding: '10px 20px',
              fontSize: '1.2rem',
            }}
          ><Link to={'/s' } style={{ textDecoration: "none", color: "white" }}>
            Donate Now
        </Link>
          
          </Button>
        </Box>

        <Box sx={{ mt: 10 }}>
        <Typography
  variant="h4"
  component="h2"
  sx={{
    textAlign: 'center',
    mb: 4,
    color: 'rgb(220, 20, 60)', // Indian Red color
    fontFamily: 'Lucida Handwriting', // Font family change
    fontSize:'50px',
    fontWeight:'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
  }}
>
  About Us
</Typography>

          <Typography variant="body1" component="p" sx={{ color: 'white', mb: 6, background: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px' }}>
          Welcome to our Blood Bank Management System, where efficiency meets compassion. Our platform is designed to streamline the management of blood donors and facilitate seamless blood donation requests. We are committed to ensuring a reliable supply of blood to those in need, driven by our mission to save lives. Our blood bank is committed to providing a safe, adequate, and efficient blood supply to those in need. We aim to create awareness about the importance of blood donation and encourage more people to become regular donors. Our team works tirelessly to ensure that every drop of blood is used efficiently to save lives.
          </Typography>
        </Box>

        <Box sx={{ mt: 10 }}>
          <Typography  variant="h4"
  component="h2"
  sx={{
    textAlign: 'center',
    mb: 4,
    color: 'rgb(30, 144, 255)', // Indian Red color
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
    fontFamily: 'Lucida Handwriting', // Font family change
    fontSize:'50px',
    fontWeight:'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
  }}>
            How It Works
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
            <Paper elevation={4} sx={{ p: 3, backgroundColor: 'rgba(255, 255, 255, 0.8)' , transition: 'transform 0.1s, box-shadow 0.1s', '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 1)',
      transform: 'scale(1.02)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },}}>
                <Typography variant="h6" component="h3" sx={{ color: 'rgb(70, 130, 180)', mb: 2,fontWeight:'bold' }}>
                  Step 1: Register
                </Typography>
                <Typography variant="body1" component="p">
                  Sign up online to become a donor or a receiver.Your blood donation can provide hope and healing to those in need.<br/><br/>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
            <Paper elevation={4} sx={{ p: 3, backgroundColor: 'rgba(255, 255, 255, 0.8)' , transition: 'transform 0.1s, box-shadow 0.1s', '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 1)',
      transform: 'scale(1.02)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },}}>
                <Typography variant="h6" component="h3" sx={{ color: 'rgb(205, 92, 92)', mb: 2 ,fontWeight:'bold'}}>
                  Step 2: Donate
                </Typography>
                <Typography variant="body1" component="p">
                Give the gift of life. Provide your basic information and medical history. The process is quick, simple, and safe.<br/><br/>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
            <Paper elevation={4} sx={{ p: 3, backgroundColor: 'rgba(255, 255, 255, 0.8)' , transition: 'transform 0.1s, box-shadow 0.1s', '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 1)',
      transform: 'scale(1.02)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },}}>
                <Typography variant="h6" component="h3" sx={{ color: 'rgb(70, 130, 180)', mb: 2 ,fontWeight:'bold'}}>
                  Step 3: Save Lives
                </Typography>
                <Typography variant="body1" component="p">
                Your donated blood can be a lifeline. Once approved by our admin, you will shortly receive an email notification about the same.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: 10 }}>
          <Typography variant="h4"
  component="h2"
  sx={{
    textAlign: 'center',
    mb: 4,
    color: 'rgb(220, 20, 60)', // Indian Red color
    fontFamily: 'Lucida Handwriting', // Font family change
    fontSize:'50px',
    fontWeight:'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
  }}>
            Testimonials
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
            <Paper elevation={4} sx={{ p: 3, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
      <Typography variant="body1" component="p" sx={{ fontFamily: 'Arial, sans-serif', fontStyle: 'italic', fontSize: '1rem' }}>
        "Donating blood was a rewarding experience. Knowing that I could help save someone's life is truly fulfilling." - Shyno S Alexander
      </Typography>
    </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={4} sx={{ p: 3, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
              <Typography variant="body1" component="p" sx={{ fontFamily: 'Arial, sans-serif', fontStyle: 'italic', fontSize: '1rem' }}>
                  "Receiving blood during my surgery was life-saving. I'm grateful to all the donors who made it possible." - Bini Thankachan
                </Typography>
              
              </Paper>
              <br /><br /><br /><br />
            </Grid>
          </Grid>
        </Box>
        </Box>
      </Container>
      <style>
        {`
          body, html {
            height: 100%;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }
          .background-section {
            /* Additional styles for the background section */
          }
        `}
      </style>
    </div>
  );
};

export default Home;
